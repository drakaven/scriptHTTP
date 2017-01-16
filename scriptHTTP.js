const https = require("https");

var getAndPrintHTMLChunks = function() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log(data + '\n');
    });
  })
}
getAndPrintHTMLChunks();