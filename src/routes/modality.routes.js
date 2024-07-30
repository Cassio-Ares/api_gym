import { Router } from "express";
import {
  getAllModality,
  getAllModalityById,
  removeModality,
  saveModality,
  updateModality,
} from "../controller/modality.controller.js";
import { authCollaborator } from "../middleware/accessAuth.js";

export const routerModality = Router();

routerModality.get("/modality", authCollaborator, getAllModality);
routerModality.get("/modality/:id", getAllModalityById); //authCollaborator
routerModality.post("/modality", authCollaborator, saveModality);
routerModality.put("/modality/:id", authCollaborator, updateModality);
routerModality.delete("/modality/:id", authCollaborator, removeModality);

export default routerModality;
