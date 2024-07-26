import { Router } from "express";
import { authLogin } from "../controller/authLogin.controller.js";

export const routerLogin = Router();

routerLogin.post("/", authLogin);

export default routerLogin;
