import express from "express";
import dotenv from "dotenv"
dotenv.config()
import bearerToken from "express-bearer-token";

import { routerCompanyTeam } from "./src/routes/companyTeam.routes.js";
import { routerInstructor } from "./src/routes/instructor.routes.js";
import { routerGymClients } from "./src/routes/gymClient.routes.js";
import { routerLogin } from "./src/routes/authLogin.routes.js";
import { routerTypeOfPlans } from "./src/routes/typeOfPlans.routes.js";
import {routerModality} from "./src/routes/modality.routes.js";
// import { dbConfig } from './src/config/dbConfig.js'  {teste para ver se banco conecta}

const app = express();

app.use(bearerToken());
app.use(express.json());


app.get("/test", (_, res)=>{
    return res.send('Hello')
})


//route login
app.use('/login', routerLogin)

//routes users
app.use('/companyteam', routerCompanyTeam)
app.use('/instructor', routerInstructor)
app.use('/gymclients', routerGymClients)

//routes plans
app.use('/typeofplans', routerTypeOfPlans)
app.use('/modality', routerModality)



app.listen(8080, ()=>{
   // console.log(dbConfig('companyTeam'))   {teste para ver se banco conecta}
    console.log("Listening on port 8080")
})