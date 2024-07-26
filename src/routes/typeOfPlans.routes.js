import { Router } from "express";
import { getAllTypePlans, getTypeOfPlansById, removeTypeOfPlans, saveTypeOfPlans, updateTypeOfPlas } from "../controller/typeOfPlans.controller";


export const  routerTypeOfPlans = Router()

routerTypeOfPlans.get('/', getAllTypePlans)
routerTypeOfPlans.get('/:id', getTypeOfPlansById)
routerTypeOfPlans.post('/', saveTypeOfPlans)
routerTypeOfPlans.put('/:id', updateTypeOfPlas)
routerTypeOfPlans.delete('/:id', removeTypeOfPlans)

export default routerTypeOfPlans