var express = require('express');
var router = express.Router();
var Knex = require('knex')
var config = require('../knexfile')
var knex = Knex(config[process.env.NODE_ENV || 'development'])
var db = require('..lib/db')(knex)

/*Custpmer routs*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Three Little Wigs' });
});

/*GET new Cumstomer*/
routrer.post('newCustomer', function(req, res, next) {
  db.addNew('customers', req.body, function(err, data) {
    res.redirect('/customers/' +data[0]);
  })
})

/*CUSTOMER INDEX*/
/*FIND one customer*/

module.exports = router;
