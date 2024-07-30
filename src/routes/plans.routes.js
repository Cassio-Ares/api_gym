import { Router } from "express";
import {
  getAllPlans,
  getPlanById,
  removePlan,
  savePlan,
  updatePlan,
} from "../controller/plans.controller.js";
import { authCollaborator } from "../middleware/accessAuth.js";

export const routerPlans = Router();

routerPlans.get("/plans", authCollaborator, getAllPlans);
routerPlans.get("/plans/:id", authCollaborator, getPlanById);
routerPlans.post("/plans", authCollaborator, savePlan);
routerPlans.put("/plans/:id", authCollaborator, updatePlan);
routerPlans.delete("/plans/:id", authCollaborator, removePlan);
