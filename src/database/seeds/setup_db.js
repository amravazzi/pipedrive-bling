
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        { departure: 'GRU', arrival: 'BRC', value: 10 },
        { departure: 'GRU', arrival: 'SCL', value: 18 },
        { departure: 'GRU', arrival: 'ORL', value: 56 },
        { departure: 'GRU', arrival: 'CDG', value: 75 },
        { departure: 'SCL', arrival: 'ORL', value: 20 },
        { departure: 'BRC', arrival: 'SCL', value: 5 },
        { departure: 'ORL', arrival: 'CDG', value: 5 }
      ]);
    });
};
