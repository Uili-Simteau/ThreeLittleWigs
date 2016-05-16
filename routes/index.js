var express = require('express');
var router = express.Router();
var Knex = require('knex')
var config = require('../knexfile')
var knex = Knex(config[process.env.NODE_ENV || 'development'])


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Three Little Wigs' });
});

/*GET new Cumstomer*/



module.exports = router;
