import express from "express";
import dotenv from "dotenv"
dotenv.config()
import { routerCompanyTeam } from "./src/routes/companyTeam.routes.js";
import { routerInstructor } from "./src/routes/instructor.routes.js";
import { routerGymClients } from "./src/routes/gymClient.routes.js";
import { routerLogin } from "./src/routes/authLogin.routes.js";
//import { dbConfig } from './src/config/dbConfig.js'   {teste para ver se banco conecta}

const app = express();

app.use(express.json());

app.get("/test", (_, res)=>{
    return res.send('Hello')
})


//routes api
app.use('/companyteam', routerCompanyTeam)
app.use('/instructor', routerInstructor)
app.use('/gymclients', routerGymClients)
app.use('/login', routerLogin)

app.listen(8080, ()=>{
   // console.log(dbConfig('client'))   {teste para ver se banco conecta}
    console.log("Listening on port 8080")
})