import express from "express";
import dotenv from "dotenv"
dotenv.config()
import { routerCompanyTeam } from "./src/routes/companyTeam.routes.js";
import { routerInstructor } from "./src/routes/instructor.routes.js";

const app = express();

app.use(express.json());

app.get("/test", (_, res)=>{
    return res.send('Hello')
})


//routes api
app.use('/companyteam', routerCompanyTeam)
app.use('/instructor', routerInstructor)

app.listen(8080, ()=>{
    console.log("Listening on port 8080")
})