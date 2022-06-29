'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c7e189c9748cb8bbb043ae3b7661a0f2",
"assets/Assets_Varl%25C4%25B1klar/resimler/activia.jpg": "9584b4e2b2947256b661d5ccec8176cf",
"assets/Assets_Varl%25C4%25B1klar/resimler/Anasayfa.jpg": "6f5fe45ab208185bcb5e3eb72277a04d",
"assets/Assets_Varl%25C4%25B1klar/resimler/avokadosalata.jpg": "1b98b38f0348267b4e768162041afd0e",
"assets/Assets_Varl%25C4%25B1klar/resimler/ayran.jpg": "4c8cfd75ced4b933d5dd2d44ad05189e",
"assets/Assets_Varl%25C4%25B1klar/resimler/bask%25C3%25BCl.jpg": "2772b7bbceb2bd89125960cac069f332",
"assets/Assets_Varl%25C4%25B1klar/resimler/bostanasalata.jpg": "a0729a430785290e5ffa65d144971bbe",
"assets/Assets_Varl%25C4%25B1klar/resimler/bulgursalata.jpg": "102448217398bb9906808468a4e000c3",
"assets/Assets_Varl%25C4%25B1klar/resimler/fruit_granola.jpg": "232cb4e2c3f35c355941d0d7e3224b26",
"assets/Assets_Varl%25C4%25B1klar/resimler/hata.png": "ac6a99e0107c2774207d908c80d498c6",
"assets/Assets_Varl%25C4%25B1klar/resimler/kalp.jpg": "fe96cd303ee2609123d6eeecab4cbed8",
"assets/Assets_Varl%25C4%25B1klar/resimler/karnabahar.jpg": "6a87fb3f458032b2e29881b7f53149cc",
"assets/Assets_Varl%25C4%25B1klar/resimler/keto_snack.jpg": "9adec61cad78b52c6b8a2d5f70073526",
"assets/Assets_Varl%25C4%25B1klar/resimler/kilo1.png": "a5b304f3169f0562e0fbf4cf54d3cf07",
"assets/Assets_Varl%25C4%25B1klar/resimler/kilo2.png": "27da9f7c21981d375262d0ae40d29c82",
"assets/Assets_Varl%25C4%25B1klar/resimler/m%25C3%25BCcver.jpg": "a16ae2942550532442adeb159cac5dcf",
"assets/Assets_Varl%25C4%25B1klar/resimler/madensuyu.jpg": "9be9439246f28fb3706760b672a000f8",
"assets/Assets_Varl%25C4%25B1klar/resimler/mantarkavurma.jpg": "ed7af6a72704007683ae1ba6cd85c27a",
"assets/Assets_Varl%25C4%25B1klar/resimler/meyvesuyu.jpg": "f4ce821abe3cd5f24e4739972740b039",
"assets/Assets_Varl%25C4%25B1klar/resimler/nohut.jpg": "8763f32ef42f9ffe2bd9138abf3ee845",
"assets/Assets_Varl%25C4%25B1klar/resimler/otkavurma.jpg": "b2983dfcb4be9aed70aec6e170d15139",
"assets/Assets_Varl%25C4%25B1klar/resimler/pesto_pasta.jpg": "2b5a734f61e663779af2f9c785d40051",
"assets/Assets_Varl%25C4%25B1klar/resimler/rokasalata.jpg": "1e04a95d8fe66ac93b56f0e2e1ffe182",
"assets/Assets_Varl%25C4%25B1klar/resimler/siyezlimercimeksalata.jpg": "64fae76c406407cd92dffa0062659907",
"assets/Assets_Varl%25C4%25B1klar/resimler/su.jpg": "ae99e5a2b11f2399a5d5acf8f8bd7f6a",
"assets/Assets_Varl%25C4%25B1klar/resimler/yemektarifi.jpg": "1f1d81218b487db605f45038246d4795",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "bb1e0ce20e4a5dc27962913d72a44164",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0417108bb9d227e10dc956274a9f853",
"/": "e0417108bb9d227e10dc956274a9f853",
"main.dart.js": "4a6baff7e4a7b76d2ba7f5ceaed172bc",
"manifest.json": "47b30b69423921e5c180ab42256a4c67",
"version.json": "1356c268cb4270af016e041d93bd0f06"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
