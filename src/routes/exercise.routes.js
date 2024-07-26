import { Router } from "express";
import {
  getAllExercise,
  getExerciseById,
  removeExercise,
  saveExercise,
  updateExecise,
} from "../controller/exercise.controller.js";

export const routerExercise = Router();

routerExercise.get("/", getAllExercise);
routerExercise.get("/:id", getExerciseById);
routerExercise.post("/", saveExercise);
routerExercise.put("/:id", updateExecise);
routerExercise.delete("/:id", removeExercise);
