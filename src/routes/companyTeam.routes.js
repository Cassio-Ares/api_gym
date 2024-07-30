import { Router } from "express";
import {
  getAllTeam,
  getCollaboratorById,
  saveCollaborator,
  updateDataCollaborator,
} from "../controller/companyTeam.controller.js";
import { authCollaborator } from "../middleware/accessAuth.js";

/**
 * routes se comunica com controller e é resposável pelas definições dos endpoints usando crud (get, post, put, delete)
 */

export const routerCompanyTeam = Router();

routerCompanyTeam.get("/companyteam", authCollaborator ,getAllTeam);
routerCompanyTeam.get("/companyteam/:id",authCollaborator ,getCollaboratorById);
routerCompanyTeam.post("/companyteam", saveCollaborator);
routerCompanyTeam.put("/companyteam/:id", authCollaborator ,updateDataCollaborator);

export default routerCompanyTeam;
