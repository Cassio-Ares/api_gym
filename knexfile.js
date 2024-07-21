import { dbConfig } from "./src/config/dbConfig.js";

export default{
  development: dbConfig,
  migrations: {
    directory: "./migrations",
  }
};

//https://github.com/knex/knex/issues/1232