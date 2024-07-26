import { getAll, getById, remove, save, update } from "../models/typeOfPlans.model.js"


export const getAllTypePlans = async (_, res) =>{
    try {
        const data =  await getAll()
        return res.status(200).json({data})
    } catch (error) {
        
    }
   
}

export const getTypeOfPlansById = async (req, res) =>{
  try {
     const data = await getById(req.params.id)
     return res.status(200).json({data})
  } catch (error) {
    console.log(error)
  }
}

export const saveTypeOfPlans = async (req, res) =>{
    try {
        const data = req.body
        const typeOfPlan = await save(data)
        return res.status(201).json({typeOfPlan})
    } catch (error) {
          console.log(error)
    }
}

export const updateTypeOfPlas = async (req, res) =>{
    try {
        const data = req.body;
        const typeOfPlan = await update(req.params.id,data)
        return res.status(201).json({typeOfPlan})
    } catch (error) {
      
    }
}

export const removeTypeOfPlans = async (req, res) =>{
    try {
        const data = await remove(req.params.id);
        return res.status(200).json({data})
    } catch (error) {
        
    }
}