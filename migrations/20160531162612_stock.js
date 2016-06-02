
exports.up = function(knex, Promise) {

  console.log('creating stock table')

  return knex.schema.createTableIfNotExists('stock', function(table){
    table.increments('id')
    table.string('sku')
    table.string('name')
    table.string('description')
    table.string('customer_id')
    table.string('product_link')
    table.string('supplier')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stock').then(function(){
    console.log('stock table was dropped')
  })
};
