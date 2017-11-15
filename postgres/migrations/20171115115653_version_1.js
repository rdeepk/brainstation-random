
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('authors', function(table) {
      table.increments('id').primary();
      table.timestamp('ctreated_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      table.string('email').unique().notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
