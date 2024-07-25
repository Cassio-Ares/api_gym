/**
 * Comando para criar uma migrate
 *          npx knex migrate:make create_nome da tabela_table 
 * 
 * Comando para subir a migtate para banco
 *           npx knex migrate:up --env development
 */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('nome da tabela', (table)=>{
    /**
     * aqui vai os detalhes da estrutura da tabela 
     * table.typo de dado('nome da coluna')
     * 
     * table.bigIncrements('muscle_id').primary(),
     * table.string('muscle', 50)
     */

    /**
     * foreign key: 1 x n
     * 
     * table.tipo de dado('nome').unsigned()
     * table.foreign(nome da coluna).reference(ao que ela faz referencia).inTable(em qual tabela)
     * 
     * table.bigInteger('collaborator_id').unsigned();
     * table.foreign('collaborator_id').references('companyTeam_id').inTable('companyTeam');
     * ou 
     * table.foreign('collaborator_id').references('companyTeam_id').inTable('companyTeam').onDelete('CASCADE')
     * caso seja possivel deletar o onDelete......
     */

    /**
     * foreign key: n x n
     * alem das tabelas normais criamos uma de ligação:
     * 
     * export const up = function(knex) {
     * return knex.schema.createTable('nome da tabela 1', (table)=>{})}
     * 
     * export const up = function(knex) {
     * return knex.schema.createTable('nome da tabela 2', (table)=>{})}
     * 
     * export const up = function(knex) {
     * return knex.schema.createTable('nome da tabela de ligação', (table)=>{
     *    table.bigIncrements('id').primary(),
     *    table.integer('tabela 1_ id').unsigned().notNullable(),
     *    table.integer('tabela 2 _ id').unsigned().notNullable(),
     *    table.foreign('tabela 1_ id').references('tabela 1_ id').inTable(nome da tabela).onDelete('CASCADE');
     *    table.foreign('tabela 2 _ id').references('tabela 2 _ id').inTable(nome da tabela ).onDelete('CASCADE');
     * })}
     */

  } )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('nome da tabela')
};
