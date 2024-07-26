import {
  getAll,
  getById,
  remove,
  save,
  update,
} from "../models/muscleGroup.model.js";

export const getAllMuscle = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {}
};

export const getMuscleById = async (req, res) => {
  try {
    const data = await getById(req.params.id);
    if (data) {
      return res.status(200).json({ data });
    }
  } catch (error) {}
};

export const saveMuscleGroup = async (req, res) => {
  try {
    const data = req.body;
    const muscleGroup = await save(data);
    return res.status(201).json({ muscleGroup });
  } catch (error) {}
};

export const updateMuscleGroup = async (req, res) => {
  try {
    const data = req.params;
    const muscleGroup = await update(req.params.id, data);
    return res.status(200).json({ muscleGroup });
  } catch (error) {}
};

export const removeMuscleGroup = async (req, res) => {
  try {
    const data = await remove(req.params.id);
    return res.status(200).json({ data });
  } catch (error) {}
};
