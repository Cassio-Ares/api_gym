import {
  getAll,
  getById,
  remove,
  save,
  update,
} from "../models/exercise.model.js";

export const getAllExercise = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {}
};

export const getExerciseById = async (req, res) => {
  try {
    const data = await getById(req.params.id);
    if (data) {
      return res.status(200).json({ data });
    }
  } catch (error) {}
};

export const saveExercise = async (req, res) => {
  try {
    const { muscle_id, exercise } = req.body;
    if (!muscle_id || !exercise) {
      return res.status(400).json({ message: "error" });
    }

    const newExercise = await save({ muscle_id, exercise });

    return res.status(201).json({ newExercise });
  } catch (error) {}
};

export const updateExecise = async (req, res) => {
  try {
    const data = req.body;
    const exercise = await update(req.params.id, data);
    return res.status(200).json({ exercise });
  } catch (error) {}
};

export const removeExercise = async (req, res) => {
  try {
    const data = await remove(req.params.id);
    return res.status(200).json({ data });
  } catch (error) {}
};
