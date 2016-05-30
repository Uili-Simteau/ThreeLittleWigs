var Knex = require('knex')
var config = require('./knexfile')
var knex = Knex(config[process.env.NODE_ENV || 'development'])
module.exports = knex
