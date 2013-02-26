window.addEventListener('load', function pageOnload() {
  var installElement = document.getElementById('install-app');

  installElement.addEventListener('click', function installApp() {
    navigator.mozApps.install("http://evanxd.github.com/keyboard-api-demo/manifest.webapp");
  }, false);
}, false);
