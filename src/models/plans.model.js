import { db } from "../services/db.js"


const TABLE = 'plans'

/**
 * getAll usa um join:
 *  join('tabela que queremos unir' , 'tabela principal.coluna chave', = 'tabela para unir.coluna correspondente')
 *  join(typeOfPlane, plans.typePlan_id = typeofplan.typePlan_id )
 * 
 *  .select(para dizer quais dados mostrar)
 * 
 * neste caso ao inves de mostrar os id eu mostro o nome do plano na busca
 * 
 * @returns 
 */

export const getAll = () =>{
    return db()
           .table(TABLE)
           .join('typeOfPlan', 'plans.typePlan_id', '=', 'typeOfPlan.typePlan_id')
           .join('modality', 'plans.modality_id', '=', 'modality.modality_id')
           .select(
            'plans.plan_id',
            'typeOfPlan.typeOfPlan as typePlanName',
            'modality.modality as modalityName',
            'plans.planValue'
          );
}

export const getById = (id) =>{
    return db()
           .table(TABLE)
           .where('plan_id', id)
           .select('plan_id', 'typePlan_id', 'modality_id', 'planValue' )
}

export const save = (params) =>{
    return db() 
           .table(TABLE)
           .insert(params)
}

export const update = (id, params) =>{
    return db()
           .table(TABLE)
           .where('plan_id', id)
           .update(params)
}

export const remove = (id) =>{
    return db()
           .table(TABLE)
           .where('plan_id', id)
           .delete()
}