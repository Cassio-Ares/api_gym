import { db } from "../services/db.js";

const TABLE = "gymClient";

export const getALL = () => {
  return db()
    .table(TABLE)
    .select(
      "gymClient_id",
      "firstName",
      "lastName",
      "cpf",
      "email",
      "telephone",
      "dateOfBirth",
      "plan_id",
      "planStartDate",
      "planEndDate",
      "collaborator_id"
    );
};

export const getById = (id) => {
  return db()
    .table(TABLE)
    .where("gymClient_id", id)
    .select(
      "gymClient_id",
      "firstName",
      "lastName",
      "cpf",
      "email",
      "telephone",
      "dateOfBirth",
      "plan_id",
      "planStartDate",
      "planEndDate",
      "collaborator_id"
    )
    .first();
};

export const save = (params) => {
  return db().table(TABLE).insert(params);
};

export const updateClient = (id, params) => {
  return db().table(TABLE).where("gymClient_id", id).update(params);
};
