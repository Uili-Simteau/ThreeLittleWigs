var request = require('superagent') // some request library
var exampleTemplate = require('./views/example.js')

request.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)

  var content = exampleTemplate({name: "hyperscript"})
  document.body.appendChild(content)
})

