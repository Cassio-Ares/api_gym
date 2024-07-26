import { Router } from "express";
import { getAllPlans, getPlanById, removePlan, savePlan, updatePlan } from "../controller/plans.controller.js";


export const routerPlans = Router()


routerPlans.get('/', getAllPlans)
routerPlans.get('/:id', getPlanById)
routerPlans.post('/', savePlan)
routerPlans.put('/:id', updatePlan)
routerPlans.put('/:id', removePlan)