import { getAll, getById, save, update } from "../models/companyTeam.model.js";
import { crypt } from "../utils/bcryptUtils.js";
import { emailValid } from "../utils/emailValid.js";

/**
 * Controller se comunica com model e é responsável por gerenciamento das lógicas das requisições
 */

export const getAllTeam = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    //to do
  }
};

export const getCollaboratorById = async (req, res) => {
  try {
    const data = await getById(req.params.id);
    if (data) {
      return res.status(200).json({ data });
    } else {
      return res.status().json({ message: "to do " });
    }
  } catch (error) {
    //to do
  }
};

export const saveCollaborator = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && !emailValid(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const cryptPass = await crypt(password);

    const data = {
      ...req.body,
      email: email,
      password: cryptPass,
    };

    const resultSave = await save(data);
    res.status(201).json({ resultSave });
  } catch (error) {
    //to do
  }
};

export const updateDateCollaborator = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;
    let data = { ...rest };

    if (email && !emailValid(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    } else if (email && emailValid(email)) {
      data.email = email;
    }

    if(password) {
      const cryptPass = await crypt(password);
      data.password = cryptPass;
    }

    const updataDate = await update(req.params.id, data);

    if (updataDate) {
      return res.status(200).json({ updataDate });
    } else {
      res.status(404).json({ message: "to do" });
    }
  } catch (error) {
    //to do
  }
};
