import { db } from "../services/db.js";

/**
 * Base: Model responsável por interagir com banco de dados; realizando consulta, inserção, delete, ...
 */

const TABLE = 'instructor';

export const getAll = () =>{
    return db(TABLE)
            .select('id', 'firstName', 'lastName' , 'cpf', 'dateOfBirth', 'telephone','email','positionCompany','modalities','admissionDate' )
}

export const getById = (id) => {
    return db(TABLE)
           .where({id})
           .select
           .select('id', 'firstName', 'lastName','cpf', 'dateOfBirth', 'telephone','email','positionCompany','modalities','admissionDate')
           .first()
}

export const save = (params) =>{
    return db(TABLE)
           .insert(params)
}

export const update = (id, params) =>{
    return db(TABLE)
           .where({id})
           .update(params)
}


/**
 * OBS:
 *  para testar apos criar service comente select e rode  a api ira aparecer um data vazio
 */