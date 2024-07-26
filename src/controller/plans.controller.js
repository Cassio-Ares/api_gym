import {
  getAll,
  getById,
  remove,
  save,
  update,
} from "../models/plans.model.js";

export const getAllPlans = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const getPlanById = async (req, res) => {
  try {
    const plan = await getById(req.params.id);
    if (plan) {
      return res.status(200).json({ plan });
    } else {
      return res.status(404).json({ message: "to do" });
    }
  } catch (error) {}
};

/**
 * como já citei os dados na minha migration aqui para buscar a foreing keys
 * só preciso citar o nome delas.
 */

export const savePlan = async (req, res) => {
  try {
    const { plan, typePlan_id, modality_id, planValue } = req.body;

    if (!plan || !typePlan_id || !modality_id || !planValue) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    const newPlan = await save({ plan, typePlan_id, modality_id, planValue });

    return res.status(201).json(newPlan);
  } catch (error) {}
};

export const updatePlan = async (req, res) => {
  try {
    const data = req.body;
    const plan = await update(req.params.id, data);
    return res.status(200).json({ plan });
  } catch (error) {
    console.log(error);
  }
};

export const removePlan = async (req, res) => {
  try {
    const data = await remove(req.params.id);
    return res.status(200).json({ data });
  } catch (error) {}
};
