var express = require('express')
var ejs = require('ejs')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var syllable = require('syllable')

http.listen(3000)

express.static('global')
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', function (req, res) {
  res.render('index.ejs')
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
  });

  socket.on('connect', function () {
    io.emit('user connected')
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected')
  });
});
