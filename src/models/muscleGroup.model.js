import { db } from "../services/db.js";

const TABLE = "muscleGroup";

export const getAll = () => {
  return db().table(TABLE).select("muscle_id", "muscle");
};

export const getById = (id) => {
  return db()
    .table(TABLE)
    .where("muscle_id", id)
    .select("muscle_id", "muscle")
    .first();
};

export const save = (params) => {
  return db().table(TABLE).insert(params);
};

export const update = (id, params) => {
  return db().table(TABLE).where("muscle_id", id).update(params);
};

export const remove = (id) => {
  return db().table(TABLE).where("muscle_id", id).delete();
};
