window.addEventListener('load', function pageOnload() {
  var sendTextElement = document.getElementById('send-text');

  sendTextElement.addEventListener('click', function sendText() {
  	console.log('send text: Hello World!');
    navigator.mozKeyboard.commitText('Hello World!');
  }, false);
}, false);
