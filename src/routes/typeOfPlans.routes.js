import { Router } from "express";
import {
  getAllTypePlans,
  getTypeOfPlansById,
  removeTypeOfPlans,
  saveTypeOfPlans,
  updateTypeOfPlas,
} from "../controller/typeOfPlans.controller.js";
import { authCollaborator } from "../middleware/accessAuth.js";

export const routerTypeOfPlans = Router();

routerTypeOfPlans.get("/typeofplans", authCollaborator, getAllTypePlans);
routerTypeOfPlans.get("/typeofplans/:id", authCollaborator, getTypeOfPlansById);
routerTypeOfPlans.post("/typeofplans", authCollaborator, saveTypeOfPlans);
routerTypeOfPlans.put("/typeofplans/:id", authCollaborator, updateTypeOfPlas);
routerTypeOfPlans.delete("/typeofplans/:id", authCollaborator, removeTypeOfPlans);

export default routerTypeOfPlans;
