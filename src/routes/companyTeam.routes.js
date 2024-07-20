import { Router } from "express";
import { getAllTeam, getCollaboratorById, saveCollaborator, updateDateCollaborator } from "../controller/companyTeam.controller.js";

export const routerCompanyTeam = Router();

routerCompanyTeam.get('/', getAllTeam);
routerCompanyTeam.get('/:id', getCollaboratorById);
routerCompanyTeam.post('/', saveCollaborator);
routerCompanyTeam.put('/:id', updateDateCollaborator)