import { crypt } from "../utils/bcryptUtils.js";
import { emailValid } from "../utils/emailValid.js";
import { stringDate } from "../utils/stringDate.js";
import { getAll, getById, save, update } from "../models/companyTeam.model.js";

export const getAllTeam = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
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
    const { email, password, dateOfBirth, admissionDate } = req.body;

    if (email && !emailValid(email)) {
      dateOfBirth, admissionDate;
    }

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const cryptPass = await crypt(password);

    if (!dateOfBirth && !admissionDate) {
      return res.status(400).json({ error: "Password is required" }); // to do
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
    console.log(error);
  }
};

export const updateDataCollaborator = async (req, res) => {
  try {
    const { email, password, dateOfDismissal, ...rest } = req.body;
    let data = { ...rest };

    if (email && !emailValid(email)) {
      return res.status(400).json({ error: "Invalid email format" });
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

    if (updataData) {
      return res.status(200).json({ updataData });
    } else {
      res.status(404).json({ message: "to do" });
    }
  } catch (error) {
    //to do
  }
};
