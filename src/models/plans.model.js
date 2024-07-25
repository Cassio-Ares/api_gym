import { db } from "../services/db"


const TABLE = 'plans'

export const getAll = () =>{
    return db()
           .table(TABLE)
           .select('plan_id', 'typePlan_id', 'modality_id', 'planValue' )
}

export const getById = (id) =>{
    return db()
           .table(TABLE)
           .where({id})
           .select('plan_id', 'typePlan_id', 'modality_id', 'planValue' )
}

export const save = (params) =>{
    return db() 
           .table(TABLE)
           .insert({params})
}

export const update = (id, params) =>{
    return db()
           .table(TABLE)
           .where({id})
           .update({params})
}

export const remove = (id) =>{
    return db()
           .table(TABLE)
           .where({id})
           .delete()
}