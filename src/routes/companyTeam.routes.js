import { Router } from "express";
import { getAllTeam, getCollaboratorById, saveCollaborator, updateDateCollaborator } from "../controller/companyTeam.controller.js";


/**
 * routes se comunica com controller e é resposável pelas definições dos endpoints usando crud (get, post, put, delete)
 */

export const routerCompanyTeam = Router();

routerCompanyTeam.get('/' ,getAllTeam);
routerCompanyTeam.get('/:id', getCollaboratorById);
routerCompanyTeam.post('/', saveCollaborator);
routerCompanyTeam.put('/:id', updateDateCollaborator)

export default routerCompanyTeam