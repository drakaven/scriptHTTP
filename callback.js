const getAndPrintHTML = function (options, callback) {

  /* Add your code here */
  var requestOptions = {
    host: options.host,
    path: options.path
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    var chunks = "";
    /* Add your code here */
    response.on('data', function(data) {
      chunks += data;
    });

    response.on('end', function() {
      callback(chunks);
    })
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAndPrintHTML(requestOptions, printHTML);

function printHTML (html) {
  console.log(html);
}