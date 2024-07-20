


const TABLE = 'companyTeam';

export const getAll = () =>{
  return db(TABLE)
  .select('id', 'name', 'cpf', 'dateOfBirth','telephone' ,'email', 'positionCompany', 'admissionDate')
}

export const getById = (id) =>{
    return db(TABLE)
        .where({id})
        .select('id', 'name', 'cpf', 'dateOfBirth','telephone', 'email', 'positionCompany', 'admissionDate')
        .first();
}

export const getByEmail = (email) =>{
    return db(TABLE)
           .where({email})
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

