import { getAll, getById, remove, save, update } from "../models/modality.model";

export const getAllModality = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    //to do
  }
};

export const getAllModalityById = async (req, res) => {
  try {
    const data = await getById(req.params.id);
    return res.status(200).json({ data });
  } catch (error) {
    //to do
  }
};

export const saveModality = async (req, res) => {
  try {
    const data = req.body;
    const modality = await save(data);
    return res.status(201).json({ modality });
  } catch (error) {
    //to do
  }
};

export const updateModality = async (req, res) => {
  try {
    const data = req.body;
    const modality = await update(req.params.id, data);
    return res.status(200).json({ modality });
  } catch (error) {}
};

export const removeModality = async (req, res) => {
  try {
    const data = await remove(req.params.id)
    res.status(200).json({ data });
  } catch (error) {}
};
