(function () {
  var socket = io();
  var message = document.getElementById('m')
  var form = document.getElementById('form')
  var messageList = document.getElementById('messages')
  var syllableList = document.getElementById('syllableList')

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    socket.emit('chat message', message.value)
    message.value = '';
  })
  socket.on('chat message', function(msg) {
    var singleMessage = document.createElement('li')
    singleMessage.innerHTML = msg
    singleMessage.classList.add(msg)
    messageList.append(singleMessage)
  })
  socket.on('syllable', function(counter) {
    var aCount = document.createElement('li')
    aCount.innerHTML = counter
    aCount.classList.add(counter)
    syllableList.append(aCount)
  })
})()
