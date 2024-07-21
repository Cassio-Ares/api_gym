import { Router } from "express";
import { authLogin } from "../controller/authLogin.controller";


export const routerLogin = Router()


routerLogin.post('/', authLogin);

export default routerLogin;