
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('customers', function(table) {
      table.increments('id')
      table.string('first_name')
      table.string('last_name')
      table.string('email')
      table.string('home_phone')
      table.string('address')
      table.string('purchased')
      table.string('notes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customers').then(function () {
    console.log('customers table were dropped')
  })
};
