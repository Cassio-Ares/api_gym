import { db } from "../services/db.js";


const TABLE = 'instructor';

export const getAll = () =>{
    return db()
           .table(TABLE)
           .select('instructor_id', 'firstName', 'lastName' , 'cpf', 'telephone','email',  'modality_id','dateOfBirth','positionCompany','admissionDate' )
}

export const getById = (id) => {
    return db()
           .table(TABLE)
           .where({id})
           .select('instructor_id', 'firstName', 'lastName' , 'cpf', 'telephone','email',  'modality_id','dateOfBirth','positionCompany','admissionDate' )
           .first()
}



export const getByEmailInstructor = (email) =>{
    return db().table(TABLE) 
           .where({email})
           .select('instructor_id', 'firstName', 'lastName' , 'email' ,'password')
           .first()
}

export const save = (params) =>{
    return db()
           .table(TABLE)
           .insert(params)
}

export const update = (id, params) =>{
    return db()
            .table(TABLE)
           .where({id})
           .update(params)
}


