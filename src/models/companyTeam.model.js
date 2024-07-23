import { db } from "../services/db.js";


const TABLE = 'companyTeam';

export const getAll = () =>{
  return db().table(TABLE)
         // .select('id', 'name', 'email', 'created_at', 'updated_at');
        //.select('id', 'firstName', 'lastName', 'cpf', 'dateOfBirth','telephone' ,'email', 'positionCompany', 'admissionDate')
}

export const getById = (id) =>{
    return db().table(TABLE)
        .where({id})
        .select('id', 'firstName', 'lastName', 'cpf', 'dateOfBirth','telephone', 'email', 'positionCompany', 'admissionDate')
        .first();
}

export const getByEmailTeam = (email) =>{
    return db().table(TABLE)
           .where({email})
           .select('id', 'firstName', 'email' ,'password' )
           .first()
}

export const save = (params) => {
    return db().table(TABLE).insert(params);
  };

export const update = (id, params) =>{
    return db().table(TABLE)
           .where({id})
           .update({params})
}

