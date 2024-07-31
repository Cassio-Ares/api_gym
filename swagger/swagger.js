import swaggerAutogen from "swagger-autogen";

export const doc = {
  info: {
    title: "Api ADM_GYM",
    description: "Api de gestão de uma academia.",
  },
  servers:[
    { 
      url: "http://localhost:8080/",
      description: "Servidor localhost"
    }
  ],
  openapi:"3.1.0",
  language: "pt-br"
};

export const outputFile = "./swagger-output.json";

const endpointsFiles = [
  "../src/routes/authLogin.routes.js",
  "../src/routes/companyTeam.routes.js",
  "../src/routes/modality.routes.js",
  "../src/routes/typeOfPlans.routes.js",
  "../src/routes/plans.routes.js",
  "../src/routes/gymClient.routes.js",
  "../src/routes/instructor.routes.js",
  "../src/routes/muscleGroup.routes.js",
  "../src/routes/exercise.routes.js", 
];

swaggerAutogen(outputFile, endpointsFiles, doc);
