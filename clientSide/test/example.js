var test = require('tape')
var cheerio = require('cheerio')
var exampeTemplateFunction = require('../views/example.js')

test('test example template function', function(testTools) {
  
  var renderedTemplate = exampeTemplateFunction({name: "Benedict"})
  var $ = cheerio.load( renderedTemplate.outerHTML )

  testTools.equal( $('h1').text(), "Welcome to Benedict!" )

  testTools.end()
})

