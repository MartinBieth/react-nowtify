var FAKE_DATA ={
  notificationsHome: [ 
    {
        message     : 'Welcome on Nowtify',
        type       : 'success',
    },
    {
        message     : 'An error ? No problem !',
        type       : 'danger',
        displayTimeout : 3000

    },
    {
        message     : 'May the force be with you...',
        type       : 'default',
        displayTimeout : 1000
    },
    {
        message     : '... and Feel free to fork this repo !',
        type        : 'info',
        icon        : 'code-fork'
    }
  ],
  notificationHideOnClose : [
    {
      message     : 'Ooops ! I only hide myself on close',
      type       : 'warning',
      dismissible : true,
      hideOnClose: true
  }],
  notificationWithSound : [
    {
      message     : 'Woooot Wooot ! I\'m a notification with sound !',
      type       : 'success',
      icon        : 'rebel', // You can specify a specific font-awesome icon !
      dismissible : true,
      sound: true
  }],
};

// 1 — Import React-Nowtify.
import Nowtify from './dist/react-nowtify';

// 2 — Init Nowtify
Nowtify.init({
  containerID     : 'nowtify-wrapper', // Default: 'nowtify-wrapper'
  displayTimeout  : 6000,     // Default: 5000 (ms)
  dismissible     : false,    // Default: false
  keepHistory     : false,    // Default: true
  sound           : false     // Default: true
});

// 3 — You can get the config
console.info('Nowtify configuration : ', Nowtify.getConfig());

// (3.1) - You can set/edit config whenever you want 
let newConfig = {
  displayTimeout  : 3000, 
  dismissible     : true,
  sound           : false
};

console.info('Nowtify new configuration set : ', Nowtify.setConfig(newConfig))

// 4 — Show some notifications !
$(document).ready(function(){
  
  /**
  * Multiple notifications
  */
  setTimeout(function(){
    Nowtify.show( FAKE_DATA.notificationsHome );
  }, 1000);

  setTimeout(function(){
    Nowtify.show( FAKE_DATA.notificationWithSound );
  }, 5000);
   
  setTimeout(function(){
    Nowtify.show( FAKE_DATA.notificationHideOnClose );
  }, 6000);
  // Actions on button click.
  $('button').click(function(){
    switch( $(this).data('action')) {
        case 'unique':
          Nowtify.show( FAKE_DATA.notificationHideOnClose );
          break;
        case 'multiple':
          Nowtify.show( FAKE_DATA.notificationsHome );
          break;
        case 'withSound':
          Nowtify.show( FAKE_DATA.notificationWithSound );
          break;
    }
  });
});

