

const TABLE = 'instructor';

export const getAll = () =>{
    return db(TABLE)
           .select('id', 'name', 'cpf', 'dateOfBirth', 'telephone','email','positionCompany','modalities','admissionDate' )
}

export const getById = (id) => {
    return db(TABLE)
           .where({id})
           .select
           .select('id', 'name', 'cpf', 'dateOfBirth', 'telephone','email','positionCompany','modalities','admissionDate')
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