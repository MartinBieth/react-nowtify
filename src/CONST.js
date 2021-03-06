
const defaultConfig = {
  localPath: '/node_modules/react-nowtify/',
  containerID: 'nowtify-wrapper',
  displayTimeout: 5000,
  transition: 'growl',
  sound: false,
  dismissible: false,
  keepHistory: false,
};
const defaultNotificationSound = require('file!assets/notification-sound.mp3');

export { 
  defaultConfig,
  defaultNotificationSound
};