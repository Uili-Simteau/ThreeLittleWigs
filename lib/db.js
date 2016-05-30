const knex = require('../dbConfig')

module.exports = function(knex) {
  return {


    getAll: function(table, callback){
      knex(table)
      .then(function (resp){
        callback(null, resp)
      })
    },

    addNew: function(table, newObj, callback){
      knex(table)
      .insert(newObj)
      .then(function(dbresp){
        callback(null, debresp)
      })
    },

    findOne: function(table, params, callback) {
      knex(table)
      .where(params)
      .then(function(resp){
        callback(null, resp[0])
      })
    },

    update: function(table, params, newObj, callback) {
      knex(table)
      .where(params)
      .update(newObj)
      .then(function(debresp){
        callback(null, debresp)
      })
    },
  }
}
