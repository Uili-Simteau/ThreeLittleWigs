var request = require('superagent') // some request library
var exampleTemplate = require('./views/example.js')
var customerView = require('./views/customerView.js')

document.onload(function() {
  console.log("I'm ready!")
});

var button = document.getElementById('#button')
  .onclick(console.log('i am clicked'))


request.get('/users', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)

  var content = customerView({name: "Uili"})
  document.body.appendChild(content)
})

