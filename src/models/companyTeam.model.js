import { db } from "../services/db.js";

const TABLE = "companyTeam";

export const getAll = () => {
  return db()
    .table(TABLE)
    .select(
      "companyTeam_id",
      "firstName",
      "lastName",
      "cpf",
      "telephone",
      "email",
      "dateOfBirth",
      "positionCompany",
      "admissionDate"
    );
};

export const getById = (id) => {
  return db()
    .table(TABLE)
    .where("companyTeam_id", id)
    .select(
      "companyTeam_id",
      "firstName",
      "lastName",
      "cpf",
      "telephone",
      "email",
      "dateOfBirth",
      "positionCompany",
      "admissionDate"
    )
    .first();
};

export const getByEmailTeam = (email) => {
  return db()
    .table(TABLE)
    .where({ email })
    .select("companyTeam_id", "name", "email", "password")
    .first();
};

export const save = (params) => {
  return db().table(TABLE).insert(params);
};

export const update = (id, params) => {
  return db().table(TABLE).where("companyTeam_id", id).update(params);
};
