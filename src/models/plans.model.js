import { db } from "../services/db.js";

const TABLE = "plans";

export const getAll = () => {
  return db()
    .table(TABLE)
    .join("typeOfPlan", "plans.typePlan_id", "=", "typeOfPlan.typePlan_id")
    .join("modality", "plans.modality_id", "=", "modality.modality_id")
    .select(
      "plans.plan_id",
      "typeOfPlan.typeOfPlan as typePlanName",
      "modality.modality as modalityName",
      "plans.planValue"
    );
};

export const getById = (id) => {
  return db()
    .table(TABLE)
    .where("plan_id", id)
    .select("*")
    .first()
};

export const getByIdDuration = (id) => {
  return db()
      .table(TABLE) 
      .where("plan_id", id)
      .join("typeOfPlan", "plans.typePlan_id", "=", "typeOfPlan.typePlan_id")
      .select("typeOfPlan.duration")
};

export const save = (params) => {
  return db().table(TABLE).insert(params);
};

export const update = (id, params) => {
  return db().table(TABLE).where("plan_id", id).update(params);
};

export const remove = (id) => {
  return db().table(TABLE).where("plan_id", id).delete();
};
