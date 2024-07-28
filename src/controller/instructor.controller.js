import { errorBanco } from "../error/catch.js";
import { isRequired } from "../error/errorrequired.js";
import { getAll, getById, save, update } from "../models/instructor.model.js";
import { crypt } from "../utils/bcryptUtils.js";
import { emailValid } from "../utils/emailValid.js";
import { stringDate } from "../utils/stringDate.js";

export const getInstructors = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    errorBanco(res, error);
  }
};

export const getInstructorById = async (req, res) => {
  try {
    const instructor = await getById(req.params.id);
    if (!instructor) {
      return res.status(404).json({ message: "Instrutor não encontrado." });
    } else {
      return res.status(200).json({ instructor });
    }
  } catch (error) {
    errorBanco(res, error);
  }
};

export const saveInstructor = async (req, res) => {
  try {
    const {firstName, lastName, cpf, telephone, dateOfBirth, admissionDate, positionCompany, email, password } = req.body;

    const validation = isRequired( res, firstName, lastName, cpf, telephone, dateOfBirth)
    if(validation) return

    if (email && !emailValid(email)) {
      res.status(422).json({ message: "E-mail inválido" });
    }

    if (!password) {
      return res.status(400).json({ message: "Cadastre uma senha por favor" });
    }

    const passCrypt = await crypt(password);

  if(!admissionDate){
    return res.status(404).json({message: "Informe por favor a data de admissão."})
  }

  if(!positionCompany){
    return res.status(400).json({ error: "Cadastre o cargo do colaborador." });
  }

  const birth = stringDate(dateOfBirth)
  const admission = stringDate(admissionDate)

    const data = {
      ...req.body,
      email: email,
      password: passCrypt,
      dateOfBirth: birth, 
      admissionDate: admission
    };

  
    const resultData = await save(data);
    return res.status(201).json({ resultData });
  } catch (error) {
    errorBanco(res, error);
  }
};

export const updateInstructor = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;
    const data = { ...rest };

    if (email && !emailValid(email)) {
      return res.status(400).json({ message: "E-mail inválido" });
    } else if (email && emailValid(email)) {
      data.email = email;
    }

    if (password) {
      const passCrypt = await crypt(password);
      data.password = passCrypt;
    }

    const updateData = await update(req.params.id, data);
    if (!updateData) {
      return res.status(404).json({ message: "Instrutor não encontrado." });
      
    } else {
      return res.status(200).json({ updateData });
    }
  } catch (error) {
    errorBanco(res, error);
  }
};
