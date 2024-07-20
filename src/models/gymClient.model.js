

const TABLE = 'gymClient';

export const getALL = () =>{
    return db(TABLE)
           .select('id', 'name', 'cpf', 'dateOfBirth', 'telephone' ,'email', 'gymPlan' ,'planStartDate', 'planEndDate', 'collaboratorRegistered'  )
}

export const getById = (id) =>{
    return db(TABLE)
           .where({id})
           .select('id', 'name', 'cpf', 'dateOfBirth', 'telephone' ,'email', 'gymPlan' ,'planStartDate', 'planEndDate', 'collaboratorRegistered' )
           .first()
}

export const save = (params) =>{
    return db(TABLE)
           .insert(params)
}

export const updateClient = (id, params) =>{
   return db(TABLE)
          .where({id})
          .update(params)
}