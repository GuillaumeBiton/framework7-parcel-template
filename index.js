// Librairies
import Framework7 from 'framework7'

// Init F7
var app = new Framework7({
  root: '#app',
  // Fix for iPhone X notch
  statusbar: {
    overlay: Framework7.device.ios ? Framework7.device.webView || Framework7.device.cordova : 'auto',
  },
})
