import { Router } from "express";
import { getAllModality, getAllModalityById, removeModality, saveModality, updateModality } from "../controller/modality.controller";


export const routerModality = Router()

routerModality.get('/', getAllModality)
routerModality.get('/:id', getAllModalityById)
routerModality.post('/', saveModality)
routerModality.put('/:id', updateModality)
routerModality.delete('/:id', removeModality)

export default routerModality