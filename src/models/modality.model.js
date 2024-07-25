import { db } from "../services/db"


const TABLE = 'modality'

export const getAll = () =>{
    return db()
           .table(TABLE)
           .select('modality_id', 'modality')
}

export const getById = (id) =>{
    return db()
           .table(TABLE)
           .where({id})
           .select('modality_id', 'modality')
           .first()
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

