var CACHE_NAME = 'tatvacache5'

self.addEventListener('install', function (event) {
  console.log('service worker -- installing service worker...', event)
  registration.update();
})

self.addEventListener('activate', function (event) {
  console.log('service worker -- activating serice worker...', event)
  event.waitUntil(
    caches.keys().then(function(names) {
      for (let name of names) {
        caches.delete(name);
      }
    })
  )
  return self.clients.claim()
})

self.addEventListener('fetch', function (event) {
  var apiUrl = 'https://api.easyvedaz.com/'
  var oneSignalUrl = 'OneSignalSDK.js'
  if (event.request.url.indexOf(apiUrl) > -1 || event.request.url.indexOf(oneSignalUrl) > -1) {
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
