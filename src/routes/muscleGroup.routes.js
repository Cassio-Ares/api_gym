import { Router } from "express";
import {
  getAllMuscle,
  getMuscleById,
  removeMuscleGroup,
  saveMuscleGroup,
  updateMuscleGroup,
} from "../controller/muscleGroup.controller.js";
import { authIntructor } from "../middleware/accessAuth.js";

export const routerMuscleGroup = Router();

routerMuscleGroup.get("/musclegroup", authIntructor, getAllMuscle);
routerMuscleGroup.get("/musclegroup/:id", authIntructor, getMuscleById);
routerMuscleGroup.post("/musclegroup", authIntructor, saveMuscleGroup);
routerMuscleGroup.put("/musclegroup/:id", authIntructor, updateMuscleGroup);
routerMuscleGroup.delete("/musclegroup/:id", authIntructor, removeMuscleGroup);
