import h from 'hyperscript'
import $ from 'jquery'

export default () => {
  var uiliName =

    h('div#page',
      h('div#header',
        h('h1.classU', "Uili Here"),
        ));

    $('main').append(uiliName)
}
