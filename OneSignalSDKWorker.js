importScripts('/sw5.js');
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDK.js');

OneSignal.on('notificationDisplay', function (event) {
    console.warn('OneSignal notification displayed:', event);
    console.warn(event.id)
    
  });