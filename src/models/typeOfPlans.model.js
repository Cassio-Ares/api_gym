import { db } from "../services/db.js";

const TABLE = "typeOfPlan";

export const getAll = () => {
  return db().table(TABLE).select("typePlan_id", "typeOfPlan", "duration");
};

export const getById = (id) => {
  return db()
    .table(TABLE)
    .where("typePlan_id", id)
    .select("typePlan_id", "typeOfPlan", "duration");
};

export const save = (params) => {
  return db().table(TABLE).insert(params);
};

export const update = (id, params) => {
  return db().table(TABLE).where("typePlan_id", id).update(params);
};

export const remove = (id) => {
  return db().table(TABLE).where("typePlan_id", id).delete();
};
