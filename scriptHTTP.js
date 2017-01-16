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

var getAndPrintHTML = function() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    var chunks = "";
    /* Add your code here */
    response.on('data', function(data) {
      chunks += data;
    });

    response.on('end', function() {
      console.log(chunks);
    })
  });
}


getAndPrintHTML();