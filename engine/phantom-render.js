var page = require('webpage').create();
var args = require('system').args
var webserver = require('webserver');
var server = webserver.create();
var service = server.listen('127.0.0.1:' + '8080', {
    'keepAlive': true
}, function(request, response) {
  response.statusCode = 200;
  response.write('<html><body>Hello!</body></html>');
  response.close();
});
var opts = JSON.parse(args[1]|| "0")
if (!opts) {
  opts = {
      viewportWidth: 1024,
      viewportHeight: 768,
      width: 800,
      height: 600,
      url: 'https://www.github.com/',
      appName: 'test',
      format: 'jpg',
      dir: "./",
  }
}

page.viewportSize = {
  width: opts.viewportWidth || opts.width || 1024,
  height: opts.viewportHeight || opts.height || 768
}
page.clipRect = {
  top: 0,
  left: 0,
  width: opts.width || opts.viewportWidth || 1024,
  height: opts.height || opts.viewportHeight || 768,
}

page.open(opts.url, function(status) {
  if (status !== 'success') {
    console.log(JSON.stringify({
      error: status
    }))
  }
  window.setTimeout(function () {
    var path = opts.dir + "/phantom-" + opts.appName + "-" + getDateStr() + "." + opts.format
    page.render(path)
  }, opts.wait || 0)
});

function getDateStr () {
  var date = new Date()
  return date.getFullYear() + "_" + 
  (date.getMonth() + 1) + "_" + 
  date.getDate() + "-" + 
  date.getHours() + "_" + 
  date.getMinutes() + "_" + 
  date.getSeconds() + "_" + 
  date.getMilliseconds()
}