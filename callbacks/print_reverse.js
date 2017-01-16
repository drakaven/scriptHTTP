var getHTTP = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverseCase (html) {
  /* Write your code here! */
  console.log('reverse');
  console.log(html.split("").reverse().join(""));

}
getHTTP.getHTML(requestOptions, printReverseCase);


