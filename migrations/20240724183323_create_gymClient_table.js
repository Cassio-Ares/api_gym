/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
   return knex.schema.createTable('gymClient', (table) => {
      table.bigIncrements('gymClient_id').primary(),
      table.string('firstName', 50).notNullable(),
      table.string('lastName', 100).notNullable(),
      table.string('cpf', 11).notNullable(),
      table.string('email', 100).notNullable(),
      table.string('telephone', 15).notNullable(),
      table.string('password', 100).notNullable(),
      table.date('dateOfBirth').notNullable(),
      table.date('planStartDate'),
      table.date('planEndDate'),
      table.bigInteger('collaborator_id').unsigned(),
      table.foreign('collaborator_id').references('companyTeam_id').inTable('companyTeam');
      table.unique(['cpf', 'collaborator_id'])
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
   return  knex.schema.dropTable('gymClient') 
};
