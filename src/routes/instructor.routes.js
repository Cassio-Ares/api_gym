import { Router } from "express";
import { getInstructorById, getInstructors, saveInstructor } from "../controller/instructor.controller.js";


export const routerInstructor = Router()

routerInstructor.get('/', getInstructors)
routerInstructor.get('/:id', getInstructorById)
routerInstructor.post('/', saveInstructor)
routerInstructor.put('/:id', saveInstructor)