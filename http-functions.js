const https = require('https');

module.exports = {
  https: https,
  getHTML: function(options, callback) {

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
        console.log(chunks);
      })

    });
  }
}