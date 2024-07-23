import { db } from "../services/db.js";


const TABLE = 'instructor';

export const getAll = () =>{
    return db().table(TABLE)
            .select('id', 'firstName', 'lastName' , 'cpf', 'dateOfBirth', 'telephone','email','positionCompany','modalities','admissionDate' )
}

export const getById = (id) => {
    return db().table(TABLE)
           .where({id})
           .select
           .select('id', 'firstName', 'lastName','cpf', 'dateOfBirth', 'telephone','email','positionCompany','modalities','admissionDate')
           .first()
}

export const getByEmailInstructor = (email) =>{
    return db().table(TABLE) 
           .where({email})
           .select('id', 'firstName', 'email' ,'password')
           .first()
}

export const save = (params) =>{
    return db().table(TABLE)
           .insert(params)
}

export const update = (id, params) =>{
    return db().table(TABLE)
           .where({id})
           .update(params)
}


/**
 * OBS:
 *  para testar apos criar service comente select e rode  a api ira aparecer um data vazio
 */