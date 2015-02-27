var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index');
});

server.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port); 
});

