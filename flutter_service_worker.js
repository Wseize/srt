'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d2774bae981174ed725ae8c435201e51",
"assets/AssetManifest.bin.json": "e3a6b2768f52aa8936aa3fe6a64d9a7f",
"assets/AssetManifest.json": "271ba4df970728ee8ab0ebf7de88b931",
"assets/assets/font/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/font/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/img/1.png": "bb71c243c09b15077bb4a78e1ddac4ae",
"assets/assets/img/2.png": "049c1f82ecc0909f125a2a76745cb4bb",
"assets/assets/img/ac_repair.png": "7c3fabd6136dc3a867ae9b7030db7d58",
"assets/assets/img/appllication.png": "eab88f46a7f98d0b9a2b3f035ef29732",
"assets/assets/img/back.png": "0ee64512e11ad88b942c8f9ed6a3b2d3",
"assets/assets/img/banner1.png": "15a2b31da62bf119c8d980317caa29bb",
"assets/assets/img/banner2.png": "15a2b31da62bf119c8d980317caa29bb",
"assets/assets/img/banner3.png": "15a2b31da62bf119c8d980317caa29bb",
"assets/assets/img/banner4.png": "15a2b31da62bf119c8d980317caa29bb",
"assets/assets/img/best_1.png": "cf49645e7ebf3ddf4e2d38b31ee4f523",
"assets/assets/img/best_2.png": "6ce0b1f53f7353dba7cec449e7f329da",
"assets/assets/img/bg.png": "2d0b2b8588fd8c41a3cdea9cba8dfba9",
"assets/assets/img/calling.png": "8398ca1a90b1b36f15d6c9c8cd330409",
"assets/assets/img/camera.png": "01fb0a5c38cebfda1727524ce59f160c",
"assets/assets/img/card.png": "9c19895cceece322029012cb909d5b64",
"assets/assets/img/center_pin.png": "b40430ef90548339e0fbc2bb50cd9dda",
"assets/assets/img/chat.png": "61c7105ec3dc169f3eb5713a372aba35",
"assets/assets/img/check_box.png": "cf646adf6279c647286f8ec2a4a26c06",
"assets/assets/img/check_box_check.png": "a523164d12dac6be198d3acf60028ede",
"assets/assets/img/credit_card_payment.png": "94e189363a9a862a013521adfa7a7b52",
"assets/assets/img/down.png": "3a8068814496677c68a84071a641f797",
"assets/assets/img/electric_plug.png": "e6e4b20e9b3bd6cc7e7ad292dee09945",
"assets/assets/img/fb.png": "06f9009d7d1fa381344f58d0795f79c4",
"assets/assets/img/google.png": "ba15a7df021a9c3e4402ba8b9ce10f44",
"assets/assets/img/hygiene.png": "526e3266565f89d516975d0f10ebf3b4",
"assets/assets/img/h_more.png": "1e340563772c28c6a81a3ed637315bcc",
"assets/assets/img/ic_paypal.png": "1a3cbe5818a3720a8dd42148f6b7d1ab",
"assets/assets/img/Ic_saved_cards.png": "3fd014153e42691914efe0f3d1e74387",
"assets/assets/img/in.png": "7c2cc3046154d67b5e356102e6ac02e0",
"assets/assets/img/location.png": "f45e89c845c62c8ad421f9f68a6beedf",
"assets/assets/img/login_otp_icon.png": "d00ce5a2739e2d171987c17bc3cb9a2a",
"assets/assets/img/logo.png": "6087d4b0b057272ac7d3f064d7483988",
"assets/assets/img/master_card.png": "3bce5e01871d6109e8ba002a05ff6e12",
"assets/assets/img/menu.png": "4198d0e80eb5d4ea779e5cb3c6d4ee49",
"assets/assets/img/more.png": "613bb24eb78872b257321dc2090fa530",
"assets/assets/img/next.png": "c95723044b195b9b02713adccf8318be",
"assets/assets/img/only_logo.png": "f4e505defeb90efae4285e37ace384da",
"assets/assets/img/otp_bg.png": "e92869da4faed4a2bca8fa2d0426d619",
"assets/assets/img/paypal.png": "623e7c66c6ef91b8f2b0f8d7db723569",
"assets/assets/img/plumbing.png": "68ac2193baacbcac849efbd8427ab0ed",
"assets/assets/img/search.png": "7e6e05b86770598012f2934179ce3481",
"assets/assets/img/select_dot.png": "1db2563abde966d72618bdbb8dec3b1d",
"assets/assets/img/select_radio.png": "b7e3644582a54909ba6c28068ee3d66b",
"assets/assets/img/send.png": "f32d68f9d95526dc9159bcd625fa9cb7",
"assets/assets/img/share.png": "51ec1e7ef88951f60fd08f9f8828fbe3",
"assets/assets/img/show_pass.png": "a34bc96cbe758d865fcb3011e6ccdaee",
"assets/assets/img/splash.png": "29d2d28707342a2f6731ea61cd6568ca",
"assets/assets/img/u1.png": "0e9e8f267602270c812604c539381499",
"assets/assets/img/u2.png": "2e45513c177c6ee021f942a0b92b74ba",
"assets/assets/img/unselect_radio.png": "40c337453244777a64da1ec944a1f06e",
"assets/assets/img/user_placeholder.png": "3df17678fc936e73042b0f660a80b500",
"assets/assets/img/white_logo.png": "f4e505defeb90efae4285e37ace384da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "81e0f0d9459bb7a4a492fddeb49dc3f1",
"assets/image/app_logo.png": "e9912ead42e2a3f6030421a7d9595147",
"assets/image/audio.mp3": "cdd5a8079dda1acdda848defdd1c256a",
"assets/image/image1.png": "2f22a5ef68622a24d09eabc6c8b6accf",
"assets/image/image2.png": "4bfd5668195ff25ce3bb14950071ea79",
"assets/image/image3.png": "f7bb4e4712aaf34499fe8f55e3eb089d",
"assets/image/lg.png": "11942f13ccc61670597391705fd4c032",
"assets/image/light.png": "9883f603d59b6fb05bc7e5867664040a",
"assets/image/logo2.png": "fdf265e604f72925a072909876615baa",
"assets/image/menu.png": "47cb5bc7236358d128949936e0b3591f",
"assets/image/on.svg": "c19906f35ddb53549f6b5d95435cb006",
"assets/image/on1.png": "c0974eb0531158a4ee2979bca5b4a139",
"assets/image/on1.svg": "588e5ad349a89b64fde5d5047fb188b7",
"assets/image/on2.png": "fa2a87ffa5f17d04d52333a55dae936f",
"assets/image/on2.svg": "bb28b57881e4a0c943d8ada5f9e92f3b",
"assets/image/on3.png": "104fada359f893d852ba11777ab9a80d",
"assets/image/person.png": "504d259c8b8d34e8b5517ffa02c0609c",
"assets/image/soon.json": "639d121b5a325a79b99bcac622ff11cf",
"assets/image/soona.json": "aa09db89af2fdc3620a7ad1374ca3c2c",
"assets/image/source.png": "ce57ec54f4b56ff5362ad8d402f42c30",
"assets/image/splash_logo.png": "22a958aa67d5bf1bd984ba15654542c8",
"assets/image/surce1.png": "c6a1dd1d664a8bd7d1e5981184ca3cf2",
"assets/NOTICES": "12515936c6e294e4905d5ff9ebb117e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a2e0b19e6ea6fa7172e29efd902051a0",
"/": "a2e0b19e6ea6fa7172e29efd902051a0",
"main.dart.js": "9da771fca048b3be3e4057fafc5de3bc",
"manifest.json": "a91993d29266165ae2e1db453b5cf82c",
"version.json": "517fafb878fb90bdd9eb1fcb03d88d77"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
