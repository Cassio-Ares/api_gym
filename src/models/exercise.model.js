import { db } from "../services/db.js";

const TABLE = "exercise";

export const getAll = () => {
  return db()
    .table(TABLE)
    .join("muscleGroup", "exercise.muscle_id", "=", "muscleGroup.muscle_id")
    .select(
      "exercise.exercise_id",
      "muscleGroup.muscle as muscle_name",
      "exercise.exercise"
    );
};

export const getById = (id) => {
  return db()
    .table(TABLE)
    .where("exercise_id", id)
    .select("exercise_id", "muscle_id", "exercise");
};

export const save = (params) => {
  return db().table(TABLE).insert(params);
};

export const update = (id, params) => {
  return db().table(TABLE).where("exercise_id", id).update(params);
};

export const remove = (id) => {
  return db().table(TABLE).where("exercise_id", id).delete();
};
