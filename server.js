import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bearerToken from "express-bearer-token";
import cors from 'cors';

//teste swagger
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger/swagger-output.json' assert { type: 'json' };


import { routerCompanyTeam } from "./src/routes/companyTeam.routes.js";
import { routerInstructor } from "./src/routes/instructor.routes.js";
import { routerGymClients } from "./src/routes/gymClient.routes.js";
import { routerLogin } from "./src/routes/authLogin.routes.js";
import { routerTypeOfPlans } from "./src/routes/typeOfPlans.routes.js";
import { routerModality } from "./src/routes/modality.routes.js";
import { routerPlans } from "./src/routes/plans.routes.js";
import { routerMuscleGroup } from "./src/routes/muscleGroup.routes.js";
import { routerExercise } from "./src/routes/exercise.routes.js";

const app = express();
app.use(cors());
app.use(bearerToken());
app.use(express.json());

app.get("/test", (_, res) => {
  return res.send("Hello");
});


//test swagger
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//route login
app.use("/", routerLogin);

//routes users
app.use("/", routerCompanyTeam);
app.use("/", routerInstructor);
app.use("/", routerGymClients);

//routes plans
app.use("/", routerTypeOfPlans);
app.use("/", routerModality);
app.use("/", routerPlans);

//exercise
app.use("/", routerMuscleGroup);
app.use("/", routerExercise);




app.listen(8080, () => {
  console.log("Listening on port 8080");
});
