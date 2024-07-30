import { Router } from "express";
import {
  getAllExercise,
  getExerciseById,
  removeExercise,
  saveExercise,
  updateExecise,
} from "../controller/exercise.controller.js";
import { authIntructor } from "../middleware/accessAuth.js";

export const routerExercise = Router();

routerExercise.get("/exercise", authIntructor, getAllExercise);
routerExercise.get("/exercise/:id", authIntructor, getExerciseById);
routerExercise.post("/exercise", authIntructor, saveExercise);
routerExercise.put("/exercise/:id", authIntructor, updateExecise);
routerExercise.delete("/exercise/:id", authIntructor, removeExercise);
