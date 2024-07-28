import { crypt } from "../utils/bcryptUtils.js";
import { emailValid } from "../utils/emailValid.js";
import { stringDate } from "../utils/stringDate.js";
import { getAll, getById, save, update } from "../models/companyTeam.model.js";
import { errorBanco } from "../error/catch.js";
import { isRequired } from "../error/errorrequired.js";

export const getAllTeam = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    errorBanco(res, error);
  }
};

export const getCollaboratorById = async (req, res) => {
  try {
    const data = await getById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Cliente não encontrado." });
    }
    return res.status(200).json({ data });
  } catch (error) {
    errorBanco(res, error);
  }
};

export const saveCollaborator = async (req, res) => {
  try {
    const {firstName, lastName, cpf, telephone, email, password, dateOfBirth, admissionDate } = req.body;

    const validation = isRequired(res, firstName, lastName, cpf, telephone, dateOfBirth )
    if(validation) return

    if (email && !emailValid(email)) {
      res.status(422).json({ message: "E-mail inválido" });
    }

    if (!password) {
      return res.status(400).json({ error: "Cadastre uma senha por favor." });
    }

    const cryptPass = await crypt(password);

    if (!admissionDate) {
      return res.status(400).json({ message: "Cadastre a data de admissão por favor." }); 
    }

    const birth = stringDate(dateOfBirth);
    const admission = stringDate(admissionDate);

    const data = {
      ...req.body,
      email: email,
      password: cryptPass,
      dateOfBirth: birth,
      admissionDate: admission,
    };

    const resultSave = await save(data);
    res.status(201).json({ resultSave });
  } catch (error) {
    errorBanco(res, error);
  }
};

export const updateDataCollaborator = async (req, res) => {
  try {
    const { email, password, dateOfDismissal, ...rest } = req.body;
    let data = { ...rest };

    if (email && !emailValid(email)) {
      return res.status(400).json({ message: "E-mail inválido" });
    } else if (email && emailValid(email)) {
      data.email = email;
    }

    if (password) {
      const cryptPass = await crypt(password);
      data.password = cryptPass;
    }

    if (dateOfDismissal) {
      const dismissal = stringDate(dateOfDismissal);
      data.dateOfDismissal = dismissal;
    }

    const updataData = await update(req.params.id, data);

    if (!updataData) {
      return res.status(404).json({ message: "Colaborador não encontrado." });
    } else {
      return res.status(200).json({ updataData });
    } 
  } catch (error) {
    errorBanco(res, error);
  }
};
