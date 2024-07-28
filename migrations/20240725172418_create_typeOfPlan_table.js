/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('typeOfPlan', (table)=>{
    table.bigIncrements('typePlan_id').primary(),
    table.string('typeOfPlan', 50),
    table.integer('duration')//em dias
    table.unique('typeOfPlan')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('typeOfPlan')
};
