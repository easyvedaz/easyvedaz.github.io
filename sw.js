self.addEventListener('install', function (event) {
  console.log('service worker -- installing service worker...', event)
})

self.addEventListener('activate', function (event) {
  console.log('service worker -- activating serice worker...', event)
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response
      } else {
        return fetch(event.request).then(function (res) {
          caches.open('dynamic').then(function (cache) {
            cache.put(event.request.url, res.clone())
            return res
          })
        })
      }
    })
  )
})
