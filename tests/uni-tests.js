var redtape = require('redtape')
var dbConfig = require('../db-config')
var knex = dbConfig.knex
var config = dbConfig.config

var db = require('..lib/db')(knex)

/*test data to be input below?*/

var testCust = {
  firstName: "Uili",
  lastName: "Fecteau",
  addressNumber: "2"
  addressStreet:  "Bertram Grove"

}

/*tests*/

var test = redtape({
  beforeEach: function(callback) {
    return knex.migrate.latese(config)
    .then(function(){
      return knex.seed.run()
    })
    .then(function (){
      callback()
    })
  },

  afterEach: function(callback){
    knex.migrate.rollback(config)
    .then(function() {
      callback()
    })
  }
})

/*set up*/
test('setup'), function(t) {
  knex.migrate.rollback(config)
  .then(function(){
    t.end()
  })
}


/*add new customer test*/
test("test add customer function", function (t) {
  db.addNew('customers', testCust, function(undefined, dbresponse) {
    t.ok(dbresponse[0]>0)
    t.end()
  })
})

// test('it gets all the houses', function (t) {
//   db.getAll('houses', function (err, resp) {
//     housesNames.map(function(house, i) {
//       //console.log(resp[i].name)
//       t.equal(resp[i].name, house, 'Correct house names return in list')
//     })
//     t.end()
//   })
// })

test('it gets all the customers', function (t) {
  db.getAll('customers', function (err, resp) {
    customers.map(function(house, i) {
      //console.log(resp[i].name)
      t.equal(resp[i].name, house, 'Correct customer names return in list')
    })
    t.end()
  })
})


/*test('it gets a particular House', function (t) {
  db.findOne('houses', { id: 1 }, function (err, resp) {
    t.equal(resp["name"], "House Roa", 'it got the right house')
    t.end()
  })
})*/

test('it gets a particular customer', function (t) {
  db.findOne('customers', { id: 1 }, function (err, resp) {
    t.equal(resp.name, "Olly", 'it got the right house')
    t.end()
  })
})

// test("test add House function", function (t) {
//   db.addNew('houses', Tieke, function(undefined, dbresponse) {
//     t.ok(dbresponse[0]>0)
//     t.end()
//   })
// })

// test("test update House function", function(t){
//   db.update('houses',{id: TiekeUpdate.id},TiekeUpdate, function(undefined, dbresponse){
//   t.ok(dbresponse!==undefined)
//   t.end()
//   })
// })

// test('it gets a particular customer', function (t) {
//   db.findAllInHouse('customers', { houseId: 1 }, function (err, resp) {
//     t.equal(resp.name, "Olly", 'it got the right house')
//     t.end()
//   })
// })


