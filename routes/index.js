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

/*CUSTOMER INDEX*/
router.get('/customers/', function(req, res, next) {
  db.getAll('customers', function(err, data) {
    res.render('customersIndex', { customers: data });
  })
});

/*GET new Cumstomer*/
router.post('newCustomer', function(req, res, next) {
  db.addNew('customers', req.body, function(err, data) {
    res.redirect('/customers/' +data[0]);
  })
});

/*FIND one customer*/
router.get('/customers/:id', function(req, res, next) {
  db.findOne('customers', req.params, function(err, person){
    res.render('customerView', { Character: [person]});
  })
});

/*Edit Customer*/
router.get('/character/edit/:id', function(req, res, next) {
  res.render('editCustomer', { title: 'Dev of the Day' });
});

/*Product catalogue*/


module.exports = router;
