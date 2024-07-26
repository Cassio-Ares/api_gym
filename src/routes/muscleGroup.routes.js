import { Router } from "express";
import {
  getAllMuscle,
  getMuscleById,
  removeMuscleGroup,
  saveMuscleGroup,
  updateMuscleGroup,
} from "../controller/muscleGroup.controller.js";

export const routerMuscleGroup = Router();

routerMuscleGroup.get("/", getAllMuscle);
routerMuscleGroup.get("/:id", getMuscleById);
routerMuscleGroup.post("/", saveMuscleGroup);
routerMuscleGroup.put("/:id", updateMuscleGroup);
routerMuscleGroup.delete("/:id", removeMuscleGroup);
