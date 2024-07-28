import knex from "knex";
import {dbConfig} from '../config/dbConfig.js'


let conn;

export const db = () =>{
    if(!conn){
        conn = knex(dbConfig)
    }

    return conn;
}


/**
 * estrutura base para conexão com banco que se comunica com models
 * 
 * npx knex migrate:up --env development
 */