/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema.createTable("instructor", (table) => {
      table.bigIncrements("instructor_id").primary(),
        table.string("firstName", 50).notNullable(),
        table.string("lastName", 100).notNullable(),
        table.string("cpf", 11).notNullable(),
        table.string("telephone",15).notNullable(),
        table.string("email", 150).notNullable(),
        table.string("password", 50).notNullable(),
        table.bigInteger('modality_id').unsigned(),
        table.foreign('modality_id').references('modality_id').inTable('modality'),
        table.date("dateOfBirth").notNullable(),
        table.string("positionCompany").notNullable(),
        table.date("admissionDate"),
        table.date("dateOfDismissal"),
      table.timestamps(true, true),
      table.unique(["cpf", "email"])
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = function (knex) {
      return knex.schema.dropTable('instructor')
  };