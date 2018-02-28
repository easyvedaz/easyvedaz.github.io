var CACHE_STATIC_NAME = 'static2'
var CACHE_DYNAMIC_NAME = 'dynamic2'

self.addEventListener('install', function (event) {
  console.log('service worker -- installing service worker...', event)

  event.waitUntil(caches.open(CACHE_STATIC_NAME).then(function (cache) {
    console.log('Precaching App Shell')
    cache.addAll([
      '/',
      '/static/js/app.js',
      '/static/css/app.css',
      '/static/js/manifest.js',
      '/static/js/vendor.js',
      'static/images/logos/easyvedaznamelogo-192x192.png',
      'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      'https://fonts.googleapis.com/css?family=Arya',
      'https://fonts.googleapis.com/css?family=Amita|Arya',
      'https://fonts.googleapis.com/css?family=Noto+Sans',
      'https://fonts.googleapis.com/css?family=Karma',
      'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2',
      'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
      'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2',
      'https://fonts.gstatic.com/s/arya/v3/ga6CawNG-HJdxUH_-JWpZFA.woff2',
      'https://fonts.gstatic.com/s/arya/v3/ga6CawNG-HJdxUD_-JWpZFAObA.woff2',
      'https://fonts.gstatic.com/s/amita/v3/HhyaU5si9Om7PTlpC_WoEoZKdbA.woff2',
      'https://fonts.gstatic.com/s/karma/v7/va9I4kzAzMZRGLBpQeNVkqDOeTY.woff2',
      'https://fonts.gstatic.com/s/karma/v7/va9I4kzAzMZRGLBoQeNVkqDO.woff2',
      'https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
    ])
  }))
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
          return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
            cache.put(event.request.url, res.clone())
            return res
          })
        })
      }
    })
  )
})
