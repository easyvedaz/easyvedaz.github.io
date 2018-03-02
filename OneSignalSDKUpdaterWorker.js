var CACHE_NAME = 'tatvacache1'

self.addEventListener('install', function (event) {
  console.log('service worker -- installing service worker...', event)
})

self.addEventListener('activate', function (event) {
  console.log('service worker -- activating serice worker...', event)
})

self.addEventListener('fetch', function (event) {
  var apiUrl = 'https://api.easyvedaz.com/'
  if (event.request.url.indexOf(apiUrl) > -1) {
    return fetch(event.request)
  }

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response
      } else {
        return fetch(event.request).then(function (res) {
          return caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request.url, res.clone())
            return res
          })
        })
      }
    })
  )
})

importScripts('https://cdn.onesignal.com/sdks/OneSignalSDK.js');
