
exports.up = function(knex) {
  return knex.schema.createTable('carDealers', tbl => {
    tbl.increments();
    tbl.text('VIN').unique().notNullable()
    tbl.text('model').notNullable()
    tbl.integer('mileage').notNullable()
    tbl.text('make').notNullable()
    tbl.text('transmission')
    tbl.text('title')
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('carDealers');
};
