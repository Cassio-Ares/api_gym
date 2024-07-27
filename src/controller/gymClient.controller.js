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

export const getAllClient = async (_, res) => {
  try {
    const data = await getALL();
    return res.status(200).json({ data });
  } catch (error) {
    //to do
  }
};

export const getClientById = async (req, res) => {
  try {
    const data = await getById(req.params.id);
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ message: "to do" });
    }
  } catch (error) {
    // to do
  }
};

export const saveClient = async (req, res) => {
  try {
    const {
      email,
      password,
      plan_id,
      companyTeam_id,
      dateOfBirth,
      planStartDate,
    } = req.body;

    if (!plan_id || !companyTeam_id) {
      res.status(404).json({ message: "to do" });
    }

    if (email && !emailValid(email)) {
      res.status(404).json({ message: "to do" });
    }

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    let formDateStartPlan;
    if (planStartDate) {
      formDateStartPlan = stringDate(planStartDate);
    }

    let formDateBirth;
    if (dateOfBirth) {
      formDateBirth = stringDate(dateOfBirth);
    }
    
  // rota para calculo de data final do plano 

   const [dataTest] = await getByIdDuration(plan_id)

   let planEndDate = durationCalculation(formDateStartPlan, dataTest.duration)

   

    const passCrypt = await crypt(password);

    const data = {
      ...req.body,
      email: email,
      password: passCrypt,
      planStartDate: formDateStartPlan,
      dateOfBirth: formDateBirth,
    };

  
   const client = await save(data);

    res.status(201).json({ client });
  } catch (error) {
  
  }
};

export const update = async (req, res) => {
  try {
    const { email, password, planStartDate , ...rest } = req.body;
    const data = { ...rest };

    if (email && !emailValid(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    } else if (email && emailValid(email)) {
      data.email = email;
    }

    if (password) {
      const passCrypt = await crypt(password);
      data.password = passCrypt;
    }

    if(planStartDate){
      const newPlan = stringDate(planStartDate)
      data.planStartDate = newPlan
    }

    const updateDate = await updateClient(req.params.id, data);
    if (updateDate) {
      return res.status(200).json({ updateDate });
    }
  } catch (error) {
    // to do
  }
};
