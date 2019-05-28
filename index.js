// Librairies
import Framework7 from 'framework7/framework7.esm'

// Theme
var theme = localStorage.getItem('theme');
if (typeof test !== "undefined" && test !== null) {
  theme = JSON.parse(localStorage.getItem('theme'));
} else {
  theme =  'auto';
}

// Init F7
var app = new Framework7({
  root: '#app',
  theme: theme,
  // Fix for iPhone X notch
  statusbar: {
    overlay: Framework7.device.ios ? Framework7.device.webView || Framework7.device.cordova : 'auto',
  },
})

app.on('click', function (e) {
  localStorage.setItem('theme', JSON.stringify(e.target.dataset.theme))
  location.reload()
})