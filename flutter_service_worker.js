'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d1b582189d2756822ee2b0dddb5c7083",
".git/config": "298eec70a95346e6b5db8a3da33767e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "52ac610fdbdd3544c19f01e075fa56d7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7b636e42bdd4d8d3ed0c4dec22ad7c83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "863d5c078cd645d9cae1beb0739ae738",
".git/logs/refs/heads/main": "2ff317679060b8ef6979816a56444d92",
".git/logs/refs/remotes/origin/main": "ad617bd440d19ec923340e44623f5fd0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/5816edafa8fbfa4b3ff55a4b1b8a6679fa17ec": "8e6a259a239cf6674edc6b9c7ab6e8c3",
".git/objects/09/d3f6ed2d3c05f3f5c30155b8cae0c61e8d8d62": "3d3108454e0741d2092e0d8b9db6a8a9",
".git/objects/11/244d2c9becf60bf4f3b29c43a74d1bef10c52c": "6c689601028779c54fea586be6621c61",
".git/objects/20/6eabb299530371a1d7043898be8f9b8cce7cb3": "d848d08a035ba7b6f39388277763d3d4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/c944585cc7d83d12b9f78abf8ac690d9913ba3": "84bd3a1d5071c5f116eac308d14c89bd",
".git/objects/43/6cf96c4c5c7ac6e73ded1de8e5c8caec5782c7": "82b2179632931552ca5bc0197661ab8c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/57/a2a023f9b9e1834c9dbd587f26d078d735a5f4": "f7b86bf3df518ca4038663a09436b887",
".git/objects/5a/2238979021757584e6356fbf6936b384cde7e5": "7af2cf86fc224780deb813d18bddfc4d",
".git/objects/67/c9dd57f90a3cc133f4d5a581a842ce04a82fdc": "3b7aee02653f2e5a4ec1da559a6ab263",
".git/objects/6c/a1a9e7d431bd7eef7f09a34c5e67129a94a0ec": "c533e6682790a02bd738a2a284e3e7e9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/4357c232fc29c97e40763e33aa256b84171698": "1c744c70f99c1915026206df9375c3af",
".git/objects/82/32cf3ddb8c967e62f6130050d19de55063e5f4": "3f9f1c4eaa5f3178465a42a05bcd015e",
".git/objects/82/afd6817df7e6c62a415a47aa34d32428c62c7f": "d4d0abcc4a1e0a9b5b20e2d8b9f58cba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/fd2a2b69861e100431070c4a50d807cf270670": "32caddabc6b0d0ab6252d17bec091b50",
".git/objects/9b/476fb996b61a027d53ca1576cbbc42e9d50afc": "a698602be8eb238d793e9b5461d7682c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/aefc2b067c8da261a0e50412d2b26b1e3b0126": "bf6eb7c3fdb9bbcd039f172de1da310e",
".git/objects/a4/524b4df77a63dd18f1632494b8c4b57d85495f": "edcb70d66e2466250e8599b92046b944",
".git/objects/a4/da112ce79e6a16e60d9414a76ce26ac3ec44f0": "d3b253e01fee2a34b6e1f60adb1ae542",
".git/objects/a8/afcb493acef6bc9944fa3611743874f9e390a0": "63bd01f2bf827d7567c878b4489e95d9",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/a65b1da4a6342ee6c4e4f6c730afe780673e6f": "db3d9cf6bb650cec4f36fddbf3ab1111",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/ccc315e2b23337ec4d81dbf2b1d075c5ccf37c": "4a908289ff3acf2a098e909d56211c51",
".git/objects/ad/3140a4538bfd24e61759007f5717e5df843089": "156418fc26b46e69ac078aceb22dc879",
".git/objects/ad/42e38ebfc386df0121ce8cf4abb317ef1eaae9": "c2fbc7184d737a3ceef7d675b5d083d6",
".git/objects/b5/0aeac05649223e2dd1dee035bb047fcf66ad4c": "ab57f72ebffc041fa519441676a03d12",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/9cff9b444382f84bec8a613712df83fc590159": "4305f4de7e64871475d5d30db2fd503a",
".git/objects/df/ceaf7ddb41b6108ee708b62b4a5f6aa4031ce3": "78344c6dda726374f70009f86209ab2d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/24832c77590121f3bfcfe3a836f3b77bbc45ee": "d84b5f58288f3553f347f8b5bc1ee0fe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/9d0a4896e4ce0a2ba07335a8760bbfbe537ef4": "f75c7086fca5c0ae76d455ca5a0efcbc",
".git/refs/heads/main": "a99bbe0482a2d9df453977c8ba1faba5",
".git/refs/remotes/origin/main": "a99bbe0482a2d9df453977c8ba1faba5",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0f79008dbc6d069de6bdb430543449f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "427b64f893325e1ab8a3b653cc150c76",
"/": "427b64f893325e1ab8a3b653cc150c76",
"main.dart.js": "bbd4e33e9dc5f1b14622d1c3bcdd18b6",
"manifest.json": "d3615efa597e36b4653ff796c1c30701",
"README.md": "b5eabb6aaf8d9d7ff834d2758d58d715",
"version.json": "461c64dcd38f1acc5815d6ea933190d3"
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
