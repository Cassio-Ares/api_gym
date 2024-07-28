import { crypt } from "../utils/bcryptUtils.js";
import { emailValid } from "../utils/emailValid.js";
import {
  getALL,
  getById,
  save,
  updateClient,
} from "../models/gymClient.model.js";
import { stringDate } from "../utils/stringDate.js";
import { getByIdDuration } from "../models/plans.model.js";
import { durationCalculation } from "../utils/durationCalculation.js";
import { errorBanco } from "../error/catch.js";
import { isRequired } from "../error/errorrequired.js";

export const getAllClient = async (_, res) => {
  try {
    const data = await getALL();
    return res.status(200).json({ data });
  } catch (error) {
    errorBanco(res, error);
  }
};

export const getClientById = async (req, res) => {
  try {
    const data = await getById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "'Cliente não encontrado" });
    }

    return res.status(200).json({ data });
  } catch (error) {
    errorBanco(res, error);
  }
};

export const saveClient = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      cpf,
      telephone,
      email,
      password,
      plan_id,
      collaborator_id,
      dateOfBirth,
      planStartDate,
    } = req.body;
    
    //validações para dados obg
    const validation = isRequired(res, firstName, lastName, cpf, telephone, dateOfBirth )
    if(validation) return

    if (!collaborator_id) {
      return res
        .status(400)
        .json({
          message: "Registre o colaborador que fez o cadastro, por favor.",
        });
    }

    if (email && !emailValid(email)) {
      res.status(422).json({ message: "E-mail inválido" });
    }

    if (!password) {
      return res.status(400).json({ message: "Cadastre uma senha por favor" });
    }

    let formDateStartPlan;
    let formPlanEndDate;
    if (plan_id) {
      formDateStartPlan = stringDate(planStartDate);

      // rota para calculo de data final do plano
      const [dataDuration] = await getByIdDuration(plan_id);
      formPlanEndDate = durationCalculation(
        formDateStartPlan,
        dataDuration.duration
      );
    }

    let formDateBirth;
    if (dateOfBirth) {
      formDateBirth = stringDate(dateOfBirth);
    }

    const passCrypt = await crypt(password);

    const data = {
      ...req.body,
      email: email,
      password: passCrypt,
      planStartDate: formDateStartPlan,
      dateOfBirth: formDateBirth,
      planEndDate: formPlanEndDate,
    };

    const client = await save(data);

    res.status(201).json({ client });
  } catch (error) {
    errorBanco(res, error);
  }
};

export const update = async (req, res) => {
  try {
    const { email, password, planStartDate, plan_id, ...rest } = req.body;
    const data = { ...rest };

    if (email && !emailValid(email)) {
      return res.status(422).json({ message: "E-mail inválido" });
    } else if (email && emailValid(email)) {
      data.email = email;
    }

    if (password) {
      const passCrypt = await crypt(password);
      data.password = passCrypt;
    }

    if (plan_id) {
      const newPlanStart = stringDate(planStartDate);

      const [dataDuration] = await getByIdDuration(plan_id);

      const newPlanEndDate = durationCalculation(
        newPlanStart,
        dataDuration.duration
      );

      data.planStartDate = newPlanStart;
      date.planEndDate = newPlanEndDate;
    }

    const updateDate = await updateClient(req.params.id, data);
    if (!updateDate) {
      return res.status(404).json({message:"Aluno não encontrado."})
    }else{
      return res.status(200).json({ updateDate });
    }
  } catch (error) {
    errorBanco(res, error);
  }
};
