/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('plans', (table)=>{
       table.bigIncrements('plan_id').primary(),
       table.string('plan', 100)
       table.bigInteger('typePlan_id').unsigned(),
       table.foreign('typePlan_id').references('typePlan_id').inTable('typeOfPlan'),
       table.bigInteger('modality_id').unsigned(),
       table.foreign('modality_id').references('modality_id').inTable('modality'),
       table.integer('planValue')  
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = function(knex) {
    return knex.schema.dropTable('plans')
  };
  