window.addEventListener('load', function pageOnload() {
  var sendTextElement = document.getElementById('send-text');

  sendTextElement.addEventListener('click', function sendText() {
  	console.log('send text: Hello World!');
  	var conn = navigator.mozInputMethodConnection;
    conn.commitText('Hello World!');
  }, false);
}, false);
