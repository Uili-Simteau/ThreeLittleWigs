
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('customers').del(),

    // Inserts seed entries
    knex('customers').insert({id: 1, first_name: "Olly", last_name: "Roa", email: "1", home_phone: "/public/images/profile_pics/olly.jpg", purchased: "I love podcasts, exercise, scifi, surfing and code! I'm a 1,2,3 type of guy.", notes: ''}),
    knex('customers').insert({id: 2, first_name: "Hape", last_name: "Roa", email: "1", home_phone: "/public/images/profile_pics/hape.jpg", purchased: "Food, music, sports, the outdoors, health & fitness, family.", notes: ''}),
    knex('customers').insert({id: 3, first_name: "Uili", last_name: "Roa", email: "1", home_phone: "/public/images/profile_pics/uili.jpg", purchased: "I like making stuff. _ out of wood mainly.", notes: ''})
  );
};
