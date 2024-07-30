import { Router } from "express";
import {
  getInstructorById,
  getInstructors,
  saveInstructor,
} from "../controller/instructor.controller.js";
import { authCollaborator } from "../middleware/accessAuth.js";

/**
 * routes se comunica com controller e é resposável pelas definições dos endpoints usando crud (get, post, put, delete)
 */

export const routerInstructor = Router();

routerInstructor.get("/instructor", authCollaborator,getInstructors);
routerInstructor.get("/instructor/:id", getInstructorById);//
routerInstructor.post("/instructor/", authCollaborator,saveInstructor);
routerInstructor.put("/instructor/:id",authCollaborator ,saveInstructor);

export default routerInstructor;
