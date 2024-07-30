import swaggerAutogen from "swagger-autogen";

export const doc = {
  info: {
    title: "Api ADM_GYM",
    description: "Api de gestão de uma academia.",
  },
  host: "localhost:8080", // Altere para o host da sua API
  schemes: ["http"], // Altere para 'https' se necessário
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
  "../src/routes/exercise.routes.js", // Verifique se este caminho está correto
];

swaggerAutogen(outputFile, endpointsFiles, doc);
