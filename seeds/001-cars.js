
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('carDealers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('carDealers').insert([
        {make: 'Toyota', model: 'something', mileage: 2017, VIN: 'something', transmission: 'auto'},
        {make: 'Honda', model: 'something', mileage: 2012, VIN: 'something1', title: 'clean'},
        {make: 'Ford', model: 'something', mileage: 2010, VIN: 'something3'},
      ]);
    });
};
