import { db } from "../services/db.js";


const TABLE = 'gymClient';

export const getALL = () =>{
    return db().table(TABLE)
           .select('id', 'firstName', 'lastName', 'cpf', 'dateOfBirth', 'telephone' ,'email', 'gymPlan' ,'planStartDate', 'planEndDate', 'collaboratorRegistered'  )
}

export const getById = (id) =>{
    return db().table(TABLE)
           .where({id})
           .select('id','firstName', 'lastName', 'cpf', 'dateOfBirth', 'telephone' ,'email', 'gymPlan' ,'planStartDate', 'planEndDate', 'collaboratorRegistered' )
           .first()
}


export const save = (params) =>{
    return db().table(TABLE)
           .insert(params)
}

export const updateClient = (id, params) =>{
   return db().table(TABLE)
          .where({id})
          .update(params)
}