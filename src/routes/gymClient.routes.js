import { Router } from "express";
import { getAllClient, getClientById, saveClient, update } from "../controller/gymClient.controller";


/**
 * routes se comunica com controller e é resposável pelas definições dos endpoints usando crud (get, post, put, delete)
 */

export const routerGymClients = Router()

routerGymClients.get('/', getAllClient)
routerGymClients.get('/:id', getClientById)
routerGymClients.post('/', saveClient)
routerGymClients.put('/:id', update)