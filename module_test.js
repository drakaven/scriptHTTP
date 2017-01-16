var getHTTP = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


getHTTP.getHTML(requestOptions, printHTML)

function printHTML (html) {
  console.log(html);
}