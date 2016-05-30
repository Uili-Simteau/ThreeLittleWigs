var express = require('express');
var router = express.Router();
const knex = require('../dbConfig')
var db = require('../lib/db.js')(knex)

/*Customer routs*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Three Little Wigs' });
});

/*CUSTOMER INDEX*/
router.get('/customers/', function(req, res, next) {
  console.log('typeof.db: ', typeof(db.getAll))
  db.getAll('customers', function(err, data) {
    res.render('customersIndex', { customers: data });
  })
});

/*GET new Cumstomer*/
router.post('/newCustomer', function(req, res, next) {
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
router.get('/customers/edit/:id', function(req, res, next) {
  res.render('editCustomer', { title: 'Dev of the Day' });
});

/*Product catalogue*/


module.exports = router;
