import { Router } from "express";
import { getInstructorById, getInstructors, saveInstructor } from "../controller/instructor.controller.js";


/**
 * routes se comunica com controller e é resposável pelas definições dos endpoints usando crud (get, post, put, delete)
 */


export const routerInstructor = Router()

routerInstructor.get('/', getInstructors)
routerInstructor.get('/:id', getInstructorById)
routerInstructor.post('/', saveInstructor)
routerInstructor.put('/:id', saveInstructor)


export default routerInstructor;