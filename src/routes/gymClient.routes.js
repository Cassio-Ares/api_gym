import { Router } from "express";
import {
  getAllClient,
  getClientById,
  saveClient,
  update,
} from "../controller/gymClient.controller.js";
import { authCollaborator, authCollaboratorOrInstructor } from "../middleware/accessAuth.js";

/**
 * routes se comunica com controller e é resposável pelas definições dos endpoints usando crud (get, post, put, delete)
 */

export const routerGymClients = Router();

routerGymClients.get("/gymclients", authCollaboratorOrInstructor, getAllClient);
routerGymClients.get("/gymclients/:id", authCollaboratorOrInstructor, getClientById);
routerGymClients.post("/gymclients", authCollaborator, saveClient);
routerGymClients.put("/gymclients/:id", authCollaboratorOrInstructor, update);

export default routerGymClients;
