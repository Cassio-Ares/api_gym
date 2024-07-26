import { getAll, getById, save, update } from "../models/instructor.model.js";
import { crypt } from "../utils/bcryptUtils.js";
import { emailValid } from "../utils/emailValid.js";

export const getInstructors = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    // to do
  }
};

export const getInstructorById = async (req, res) => {
  try {
    const instructor = await getById(req.params.id);
    if (instructor) {
      return res.status(200).json({ instructor });
    } else {
      res.status(404).json({ message: "to do" });
    }
  } catch (error) {
    //to do
  }
};

export const saveInstructor = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && !emailValid(email)) {
      res.status(404).json({ message: "to do" });
    }

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const passCrypt = crypt(password);

    const data = {
      ...req.body,
      email: email,
      password: passCrypt,
    };

    const resultData = await save(data);
    return res.status(201).json({ resultData });
  } catch (error) {
    //to do
  }
};

export const updateInstructor = async (req, res) => {
  const { email, password, ...rest } = req.body;
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

  const updateData = await update(req.params.id, data);
  if (updateData) {
    return res.status(200).json({ updateData });
  } else {
    res.status(404).json({ message: "to do " });
  }
};
