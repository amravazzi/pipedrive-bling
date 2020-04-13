
exports.up = function(knex) {
  return knex.schema
    .createTable('quotes', function (table) {
       table.increments('id');
       table.string('departure', 255).notNullable();
       table.string('arrival', 255).notNullable();
       table.integer('value', 11).notNullable();
       table.string('status', 255).defaultTo('active').notNullable();
       table.timestamp('created_at').defaultTo(knex.fn.now());
       table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('quotes')
};
