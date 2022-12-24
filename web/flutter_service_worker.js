'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7063d116ea27e9265f7a4b12b5b8fc65",
"assets/assets/fonts/farsan_backoffice.ttf": "d542609fe80f919ce7bf08a302561f38",
"assets/assets/fonts/Icons.ttf": "d542609fe80f919ce7bf08a302561f38",
"assets/assets/fonts/sg_kara_light.ttf": "3a7d4f396f080aaed3f2517398c462dd",
"assets/assets/fonts/sg_kara_regular.ttf": "b2eb847911e97be490ddeea75345576a",
"assets/assets/fonts/sg_kara_semi_bold.ttf": "c675ae0c51ca6a028347ff2757952af4",
"assets/assets/icons/current_location.png": "ff571ed3449acad62a762a7151848ea5",
"assets/assets/icons/marker.png": "dfdee7b2962b53d122e2d328876b7135",
"assets/assets/icons/real_person.png": "2684003af8b69468168833dfa2847c1d",
"assets/FontManifest.json": "d7f5f9211c3b975d33d0b0ce6ef99fa0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ca5534e2903feaa092257b4734a29fc9",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "e3a1f1c5234db62cb0b5696a888d38fb",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"cors.json": "b9cb08b122cdb1e46a75ce7eec974089",
"favicon.ico": "134d1cf2039f3e9183c59fa0e2711aae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "04fa22e2be9a2e7ae92553639f4de0e1",
"/": "04fa22e2be9a2e7ae92553639f4de0e1",
"main_1671863947.dart.js": "edfef2fdf5126e8507fb2a4784a62f64",
"main_1671863947.dart.js_1.part.js": "5d25a984c32056944b8aa100b4168129",
"main_1671863947.dart.js_10.part.js": "b65c48c024bd0c50241f4af80daf3de7",
"main_1671863947.dart.js_100.part.js": "89ebcf953d89a5434049a607250d69d3",
"main_1671863947.dart.js_101.part.js": "2d070883f0fd1fc4ca955486b3bc9ac8",
"main_1671863947.dart.js_102.part.js": "74e51aee94b1ee2874e2b3be79aabb80",
"main_1671863947.dart.js_103.part.js": "8731673ac968158e6ed0374bea934122",
"main_1671863947.dart.js_104.part.js": "03373939163d970686e6c4ae6961955b",
"main_1671863947.dart.js_105.part.js": "7db203390e1a34d693b7126727b0669f",
"main_1671863947.dart.js_106.part.js": "493aa396feb5326b8e5cb4ea97e02d96",
"main_1671863947.dart.js_107.part.js": "ac1cdb6337a70a63b871229c2cb53d6c",
"main_1671863947.dart.js_109.part.js": "3f8c6cb44c7921756d1d47918e6fac0f",
"main_1671863947.dart.js_11.part.js": "b11c0ecb677b5992c4b1f76ad16433f4",
"main_1671863947.dart.js_110.part.js": "82e2815b1fb488a787f1fcb4983c94ab",
"main_1671863947.dart.js_111.part.js": "03389a76d89f2c641e36406504d55289",
"main_1671863947.dart.js_113.part.js": "09374731c94fe968d25a467f6a5df7f8",
"main_1671863947.dart.js_115.part.js": "89aa3c2ba9ffa87979968c0ea10281a3",
"main_1671863947.dart.js_116.part.js": "e72b8e35c3f1cfc439bb55f8bc62387a",
"main_1671863947.dart.js_117.part.js": "92b36d7c3772c2738a7dc0c8077e5ed5",
"main_1671863947.dart.js_118.part.js": "2ebc1546aa672faa585f8ac6c697cdbe",
"main_1671863947.dart.js_119.part.js": "e61fd2c9c59943404cbe18b9623bf1bb",
"main_1671863947.dart.js_12.part.js": "fb8fdd958fa191a80991e06c0a7f3e49",
"main_1671863947.dart.js_120.part.js": "9f8d4213458d6910f483468b38ba9c0c",
"main_1671863947.dart.js_121.part.js": "d3ef33ff1499eec5789fa6025a9070b7",
"main_1671863947.dart.js_124.part.js": "0fb90df3a6b339597f150c2ef3c07785",
"main_1671863947.dart.js_125.part.js": "d6303607c50e801273de1fc233c56503",
"main_1671863947.dart.js_126.part.js": "5abe0e1d2f43c05427fbca7b17fe7dc3",
"main_1671863947.dart.js_128.part.js": "fd673b2c3ae962d1cb569e4ee69a64a9",
"main_1671863947.dart.js_129.part.js": "f31a6d7a9e010915bdeb29eeadde1377",
"main_1671863947.dart.js_13.part.js": "244177b589fd9fa9144ea7a816afd677",
"main_1671863947.dart.js_130.part.js": "1deeeb5954a18d79b069efa0c8f1a50d",
"main_1671863947.dart.js_131.part.js": "819c9e2cd2bba6c4db03d62eeffebc69",
"main_1671863947.dart.js_132.part.js": "2c74683fd552557dd9b71f95b5a3906b",
"main_1671863947.dart.js_133.part.js": "ca48888a49be01945e3f679c0de14d87",
"main_1671863947.dart.js_134.part.js": "9d071c325a5a27103fe40b4bdcbbd5a0",
"main_1671863947.dart.js_135.part.js": "4a11ae3388f465fbe44cf65498df62e0",
"main_1671863947.dart.js_136.part.js": "0c0f7f84046458baa6f5cb2c3dec9fe9",
"main_1671863947.dart.js_137.part.js": "7aafc6403d287c963736b1c311dcd38c",
"main_1671863947.dart.js_138.part.js": "6d2e604e1636704c9824b2fe04ed4618",
"main_1671863947.dart.js_139.part.js": "39fb9b72e1980d4f8e60981d098bade4",
"main_1671863947.dart.js_14.part.js": "71a352626347bae7ad1790f8181c96bf",
"main_1671863947.dart.js_140.part.js": "bbd1f7e58924010fbe735d108d177833",
"main_1671863947.dart.js_142.part.js": "4a991f954012cb27a28b78032cf2091d",
"main_1671863947.dart.js_143.part.js": "3c6a967ecdfaadc5a83cc5154e483f49",
"main_1671863947.dart.js_144.part.js": "d87616ffb49ea6b08b448a5b28128e1d",
"main_1671863947.dart.js_145.part.js": "14a040e475f98a62cf11a6d6a0f3956a",
"main_1671863947.dart.js_146.part.js": "5b76f1a37a4db25ce0e0fbd3d307e2da",
"main_1671863947.dart.js_147.part.js": "1928e0446cb25fa6ca74eaf8d5eca9a1",
"main_1671863947.dart.js_148.part.js": "ac201df65103318203f66975238d33dd",
"main_1671863947.dart.js_149.part.js": "4219517166933b6be696c56919df6f45",
"main_1671863947.dart.js_15.part.js": "e15bd7a91601592ef36f4ec5a0576a2d",
"main_1671863947.dart.js_150.part.js": "dfb26883902eb43088336cd9dc695804",
"main_1671863947.dart.js_151.part.js": "a945333751d4124b6209f30f0ef3e221",
"main_1671863947.dart.js_152.part.js": "fa292d2d7c76ee3a0a09c320f0d823ac",
"main_1671863947.dart.js_153.part.js": "20d03570ecf8a483f8a31b7a5b3b2b4b",
"main_1671863947.dart.js_154.part.js": "dc3aac97b4c0f5b0401200906c008de4",
"main_1671863947.dart.js_155.part.js": "0bdf2d023ac59971f04d67d0f428bbec",
"main_1671863947.dart.js_156.part.js": "9877889dc3fafaf762254b95d8c35f9e",
"main_1671863947.dart.js_157.part.js": "716d6e5487f341fd0a75657005eaac8a",
"main_1671863947.dart.js_158.part.js": "42a12b2294fbe410b34df41fee3bd7c9",
"main_1671863947.dart.js_159.part.js": "1a9f5f91fd34d0d8696c9139d478935f",
"main_1671863947.dart.js_16.part.js": "730c37de09d6473a0e3a2ec5b9bfd700",
"main_1671863947.dart.js_161.part.js": "cdffebb730150fff0a0c4697cc5bdbc7",
"main_1671863947.dart.js_162.part.js": "9982a67299a21c394638276693b8fe81",
"main_1671863947.dart.js_163.part.js": "486940514e8930e51f453abda6aae92e",
"main_1671863947.dart.js_165.part.js": "7b99a8d7421fa80f6aa1804fefc387a3",
"main_1671863947.dart.js_166.part.js": "f69613cf6d478f542286fcdcf6a18109",
"main_1671863947.dart.js_17.part.js": "f939299c2f728aaa8557d50a75449f9c",
"main_1671863947.dart.js_18.part.js": "7d19a1e6cfc6a738cc138f9763d08208",
"main_1671863947.dart.js_19.part.js": "5f5e8d2238414bdb4a8af8afc151e30f",
"main_1671863947.dart.js_2.part.js": "a1ea678088e8f569bc556f26c9151d59",
"main_1671863947.dart.js_20.part.js": "a42f7b46b148940bdb3b4c78f5491613",
"main_1671863947.dart.js_22.part.js": "5888f849d64a77767174ee809456c105",
"main_1671863947.dart.js_23.part.js": "6f3ffe7df98a9c87c996e36000799598",
"main_1671863947.dart.js_24.part.js": "549b61fb7f0cc8ab2073a88eada92d15",
"main_1671863947.dart.js_26.part.js": "a352bcd8a3c5012c6e036113f7a3cf5e",
"main_1671863947.dart.js_27.part.js": "8a6cd1c3be9fbd8b648c277e767023c0",
"main_1671863947.dart.js_28.part.js": "e8b5765b0681339df9d205d87e9da6b7",
"main_1671863947.dart.js_29.part.js": "f86da9b3474384aaa982eab6860191ee",
"main_1671863947.dart.js_3.part.js": "752f12ef3c1e12f6b6c61007445f275a",
"main_1671863947.dart.js_30.part.js": "0ffe18cbd39ceabf3bb524c9d346c9ad",
"main_1671863947.dart.js_31.part.js": "23bfb9d6e9945ca59ace0273cc730867",
"main_1671863947.dart.js_32.part.js": "a61a24a3c60687deeaee42500c0a8ad9",
"main_1671863947.dart.js_33.part.js": "cdb18c80ba32c1be3f484cd1016b188d",
"main_1671863947.dart.js_34.part.js": "e3fdeefa04fa2e8618c0cc05e53029cf",
"main_1671863947.dart.js_35.part.js": "450eb359ab1996b5f6f666b2d9d87b4c",
"main_1671863947.dart.js_36.part.js": "686cb2c6e3d3c13db84b305eee6700a1",
"main_1671863947.dart.js_37.part.js": "1258307b477105f7c205b87fcf477a5b",
"main_1671863947.dart.js_38.part.js": "4be6d10761724a24bc35aeb62368d447",
"main_1671863947.dart.js_39.part.js": "6e95ba8ec07a7f0a0218c06e51fc264c",
"main_1671863947.dart.js_4.part.js": "dae113cb35ddfc0419e45ab7d5867197",
"main_1671863947.dart.js_40.part.js": "d8e5818d3c4a6fe4e0c9257ed6d1c2c9",
"main_1671863947.dart.js_41.part.js": "3f51ae8b122b5bc5f90a12be62ba39e0",
"main_1671863947.dart.js_42.part.js": "f990cac374a98e67c8137844e9d62382",
"main_1671863947.dart.js_43.part.js": "520a6468e0bf20c4be4d9ee459de366f",
"main_1671863947.dart.js_44.part.js": "cca78069daf26f121b8d5cba173f6674",
"main_1671863947.dart.js_45.part.js": "6db4296c5e6d2e2c26474831eebf1952",
"main_1671863947.dart.js_46.part.js": "b6ea92a4aaf1de2b239f1a4447f6fc91",
"main_1671863947.dart.js_48.part.js": "e26ba743bca8341112bef4b6c48d73e0",
"main_1671863947.dart.js_49.part.js": "2b55c135466b3bb5142928b0ec1c279e",
"main_1671863947.dart.js_50.part.js": "cd109f86f88e978d78e99ed9e9ff8c46",
"main_1671863947.dart.js_52.part.js": "1ab2d4a9610e049e1dc6ef67d20b058a",
"main_1671863947.dart.js_53.part.js": "ebc41f07650f31dfdc13e416cd71cb25",
"main_1671863947.dart.js_54.part.js": "bb46902971651930e248d2762aed2526",
"main_1671863947.dart.js_55.part.js": "d382261d5c140fd08e1766c498be668e",
"main_1671863947.dart.js_56.part.js": "d2c661f9ca4dd48e30308e47d81e3519",
"main_1671863947.dart.js_57.part.js": "551ec6ae0467b4f00b5b6c7a41b829c3",
"main_1671863947.dart.js_58.part.js": "6b89b656fca7ec06837e4d68caf9e8b0",
"main_1671863947.dart.js_59.part.js": "0aebcd7b7a050d7c2f414f845fb5ccd3",
"main_1671863947.dart.js_6.part.js": "7983488958e485cf64cdcbe6017e1c58",
"main_1671863947.dart.js_60.part.js": "169ffe6936915fbb597ea1d7ea532530",
"main_1671863947.dart.js_61.part.js": "5a60d6507fe17251473ba97ad4faada6",
"main_1671863947.dart.js_63.part.js": "80f740a5e11388cfc942307667d74a7e",
"main_1671863947.dart.js_64.part.js": "d5c70e60d0f0b41fa150cdc9609445f1",
"main_1671863947.dart.js_65.part.js": "00f07ef394cda0da229a8ccb889f6f1f",
"main_1671863947.dart.js_67.part.js": "3188ebca2090b6849fdd30ab734f85a4",
"main_1671863947.dart.js_68.part.js": "b1309ceb6fb510f2270060ae5499c35c",
"main_1671863947.dart.js_69.part.js": "31c426f93a6b19d1a2889e6a0beb5eb7",
"main_1671863947.dart.js_7.part.js": "c089b42f5e11f7ce3b6693f5e8a03970",
"main_1671863947.dart.js_70.part.js": "a70c335ab554eda2317fe3942ab70939",
"main_1671863947.dart.js_71.part.js": "b3f3109a3376161e26bba2c5786351ea",
"main_1671863947.dart.js_72.part.js": "8f9bde95158c61d184514648344c6acb",
"main_1671863947.dart.js_73.part.js": "8d7f008224370381f0b516826981496f",
"main_1671863947.dart.js_74.part.js": "14e5112ecb344888c95e942c997b095a",
"main_1671863947.dart.js_75.part.js": "2c6d838039eaad170e3e59f719ba46c5",
"main_1671863947.dart.js_76.part.js": "5c67845b02512d2e90b60d35fb92b7e1",
"main_1671863947.dart.js_77.part.js": "5b35baa4a96e0a3aa89a42e6f5130e63",
"main_1671863947.dart.js_78.part.js": "1c5be630d6c012b61f7c56505ca99ac0",
"main_1671863947.dart.js_79.part.js": "dd174415d416f503055e9f86248c34e4",
"main_1671863947.dart.js_8.part.js": "735d3446c76a41c1d2c37679032cb0b1",
"main_1671863947.dart.js_80.part.js": "2bbfab361cc7783bc10f890cd692e086",
"main_1671863947.dart.js_81.part.js": "68bc688f1cc87dd0d670415ba63c7aeb",
"main_1671863947.dart.js_82.part.js": "7db2e9d1b54e2d92c10cf22512c0273a",
"main_1671863947.dart.js_83.part.js": "dfe6fc586b0537363bcdbb4dbf4e8d9e",
"main_1671863947.dart.js_84.part.js": "99dea1288c60f4fb8a96faafb151e297",
"main_1671863947.dart.js_85.part.js": "8aebd40a1a3985c5108684e254621ed7",
"main_1671863947.dart.js_86.part.js": "b42c46ea4a7e856ff6ec73eb9eff1e60",
"main_1671863947.dart.js_87.part.js": "644698179e4b80a032c9f6f33d3a167f",
"main_1671863947.dart.js_88.part.js": "2fdc9776d091f458285ab5cad0135ecd",
"main_1671863947.dart.js_89.part.js": "a1b973ebb19b1d3bfd3d6cd80cc3ed65",
"main_1671863947.dart.js_9.part.js": "f7c1ef278784b23d8cbdb763a064d5b6",
"main_1671863947.dart.js_91.part.js": "620327f3df9d49de662cf7b32c0d027a",
"main_1671863947.dart.js_92.part.js": "7968f6fc6282a7aa0bf0e1de4f4559db",
"main_1671863947.dart.js_94.part.js": "9fa5f49866c869c2360fb89717685677",
"main_1671863947.dart.js_95.part.js": "dc934174d924c9c69f84c4da456fdd54",
"main_1671863947.dart.js_96.part.js": "2e47acb3c1c27fdad13636d66b4751c4",
"main_1671863947.dart.js_98.part.js": "d3ac21d1b2bf09028c07cc59f453e346",
"main_1671863947.dart.js_99.part.js": "bea69e038c57195800728b2fcddf32aa",
"manifest.json": "5574d457d03f72c4b5cdd9481359a0c0",
"simple_webapp_server.py": "8db543dbb9e405473311d09e1aa5b1a2",
"static/assets/canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"static/assets/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"version.json": "583f3c7f957cf4448dc8dea468f52e8a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main_1671863947.dart.js",
"index.html",
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
