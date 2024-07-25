import { db } from "../services/db";


const TABLE = 'typeOfPlan';

export const getAll = () =>{
    return db()
           .table(TABLE)
           .select('typePlan_id', 'typeOfPlan')
}

export const getById = (id) =>{
    return db()
           .table(TABLE)
           .where({id})
           .select('typePlan_id', 'typeOfPlan')
}

export const save = (params) =>{
   return db()
          .table(TABLE)
          .insert({params})
}

export const update = (id ,params) =>{
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