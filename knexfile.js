import { dbConfig } from "./src/config/dbConfig.js";

export default {
  development: dbConfig,
  migrations: {
    directory: "./migrations",
  },
};

//npx knex migrate:up --env development
