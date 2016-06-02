
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('stock').del(),

    // Inserts seed entries
    knex('stock').insert({id: 1, sku: '1234', name: 'Jazz', description: 'Hair replacement here', product_link: "", supplier: "Jon Renau"}),
    knex('stock').insert({id: 2, sku: '1232', name: 'Brie', description: 'Hair replacement here', product_link: "", supplier: "Jon Renau"}),
    knex('stock').insert({id: 3, sku: '1237', name: 'Ruby', description: 'Hair replacement here', product_link: "", supplier: "Jon Renau"})
  );
};
