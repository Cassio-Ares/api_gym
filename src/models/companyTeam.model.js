import { db } from "../services/db.js";


const TABLE = 'companyTeam';

export const getAll = () =>{
  return db(TABLE)
  .select('id', 'firstName', 'lastName', 'cpf', 'dateOfBirth','telephone' ,'email', 'positionCompany', 'admissionDate')
}

export const getById = (id) =>{
    return db(TABLE)
        .where({id})
        .select('id', 'firstName', 'lastName', 'cpf', 'dateOfBirth','telephone', 'email', 'positionCompany', 'admissionDate')
        .first();
}

export const getByEmailTeam = (email) =>{
    return db(TABLE)
           .where({email})
           .select('id', 'firstName', 'email' ,'password' )
           .first()
}

export const save = (params) =>{
    return db(TABLE)
           .insert(params)
}

export const update = (id, params) =>{
    return db(TABLE)
           .where({id})
           .update({params})
}

