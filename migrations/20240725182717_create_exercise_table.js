/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('exercise', (table)=>{
    table.bigIncrements('exercise_id').primary(),
    table.bigInteger('muscle_id').unsigned(),
    table.foreign('muscle_id').references('muscle_id').inTable('muscleGroup')
    table.string('exercise', 100)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTable('exercise')
};
