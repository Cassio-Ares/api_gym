import { errorBanco } from "../error/catch.js";
import {
  getAll,
  getById,
  remove,
  save,
  update,
} from "../models/typeOfPlans.model.js";

export const getAllTypePlans = async (_, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ data });
  } catch (error) {
    errorBanco(res, error)
  }
};

export const getTypeOfPlansById = async (req, res) => {
  try {
    const data = await getById(req.params.id);
    if(!data){
      return res.status(404).json({message: "Tipo de plano não encontrado." });
    }
    return res.status(200).json({ data });
  } catch (error) {
    errorBanco(res, error)
  }
};

export const saveTypeOfPlans = async (req, res) => {
  try {
    const {typeOfPlan, duration} = req.body;
    
   if(!typeOfPlan || !duration){
    return res.status(400).json({message: 'Verifique se tipo de plano e sua duração foram preenchidos corretamente.'})
   }
   const data = req.body
   const typePlan = await save(data);
    return res.status(201).json({ typePlan });
  } catch (error) {
    errorBanco(res, error)
  }
};

export const updateTypeOfPlas = async (req, res) => {
  try {
    const data = req.body;
    const typeOfPlan = await update(req.params.id, data);

    if(!typeOfPlan){
      return res.status(404).json({message: "Tipo de plano não encontrado."})
    }else{
      return res.status(201).json({ typeOfPlan });
    }
    
  } catch (error) {
    errorBanco(res, error)
  }
};

export const removeTypeOfPlans = async (req, res) => {
  try {
    const data = await remove(req.params.id);
    return res.status(200).json({ data });
  } catch (error) {
    errorBanco(res, error)
  }
};
