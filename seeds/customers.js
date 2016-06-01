
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('customers').del(),

    // Inserts seed entries
    knex('customers').insert({id: 1, first_name: "Brent", last_name: "Douglas", email: "tough@gmail.com", home_phone: "1234134", purchased: "Barry Brown", notes: 'I love long walks on the beach'}),
    knex('customers').insert({id: 2, first_name: "Sarah", last_name: "Brentwood", email: "easy@gmail.com", home_phone: "09834234", purchased: "Suzie lite", notes: 'My hair makes me happy'}),
    knex('customers').insert({id: 3, first_name: "Uili", last_name: "Fecteau", email: "simteau@gmail.com", home_phone: "029384098", purchased: "Taxi", notes: 'Someone else likes my hair'})
  );
};
