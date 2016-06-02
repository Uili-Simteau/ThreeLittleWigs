var express = require('express');
var router = express.Router();
const knex = require('../dbConfig')
var db = require('../lib/db.js')(knex)

/*Customer routes*/

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("good morning")
  res.render('index', { title: 'Three Little Wigs' });
});

/*CUSTOMER INDEX*/
router.get('/customers', function(req, res, next) {
  db.getAll('customers', function(err, data) {
  console.log('customer data : ', data),
    res.render('customersIndex', { customers: data });
  })
});

/*GET new Cumstomer*/

router.get('/newCustomer', function(req, res, next){
  console.log("newCustomer showing up")
  res.render('newCustomer', { title: 'New Customer'})
});

router.post('/newCustomer', function(req, res, next) {
  db.addNew('customers', req.body, function(err, data) {
    res.redirect('/customers/' + data[0]);
  })
});

/*FIND one customer*/
router.get('/customers/:id', function(req, res, next) {
  console.log('req here: ', req)
  db.findOne('customers', req.params, function(err, person){
    res.render('customerView', { Customer: [person]});
  })
});

/*Edit Customer*/
router.get('/customers/edit/:id', function(req, res, next) {
  res.render('editCustomer', { title: 'Edit Customer' });
});

/*Stock DB*/
router.get('/stock', function(req, res, next) {
  console.log('getting stock db: ', typeof(db.getAll))
  db.getAll('stock', function(err, data) {
    console.log('stock data: ',data)
    res.render('stock', { stock: data });
  })
});

module.exports = router;
