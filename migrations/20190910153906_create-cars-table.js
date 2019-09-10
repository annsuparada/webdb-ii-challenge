
exports.up = function(knex) {
  return knex.schema.createTable('carDealers', tbl => {
    tbl.increments();
    tbl.text('brand').unique().notNullable()
    tbl.text('model').unique().notNullable()
    tbl.integer('year').unique().notNullable()
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('carDealers');
};
