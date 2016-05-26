var h = require('hyperscript')

function exampleTemplate( object ) {
  var name = object.name

  var domElement =
  h('div#page',
    h('div#header',
      h('h1.classy', "Welcome " + name + "!", { style: {'background-color': 'white'} })
    ),
    h('form', { style: {'background-color': '#2f2'} },
      h('p', "Login: " + 'input Placeholder="email or username"'
      h('p', "Login: " + 'input Placeholder="email or username"'
      )
    ),
    h('h2', 'content title',  { style: {'background-color': '#f22'} }),
    h('p',
      "so it's just like a templating engine,\n",
      "but easy to use inline with javascript\n"
    ),
  )

  return domElement
}

module.exports = customerView
