importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "asksite",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.dac870196b6268483673.js",
    "revision": "feb83d18b4a0d9e98c61545884a973b2"
  },
  {
    "url": "/_nuxt/layouts/default.6a00aa79876d1f088f32.js",
    "revision": "a4bbb3a08d3533a0708bd2fcc361f607"
  },
  {
    "url": "/_nuxt/layouts/defaultLayout.0da63606c8f77163c717.js",
    "revision": "a6c64443f2de1bcb8e287b80667ef8f1"
  },
  {
    "url": "/_nuxt/manifest.ad51a26efe0bd2b55f33.js",
    "revision": "ea02cff52d640d06e03f001de822694a"
  },
  {
    "url": "/_nuxt/pages/about.2fdf5426ff1416ea64e4.js",
    "revision": "42a98895ea55441355584e4429b85f58"
  },
  {
    "url": "/_nuxt/pages/blog/_post.63b5f6dbe91dbe64f583.js",
    "revision": "03de727bd9da0e29cfc426b4895bfe89"
  },
  {
    "url": "/_nuxt/pages/blog/index.e913b6aa748f93477606.js",
    "revision": "630ec36b98d20f2cbb60e36d9445e902"
  },
  {
    "url": "/_nuxt/pages/contact.c4d8cc0ed702a42b5202.js",
    "revision": "b26fbb08bb7f83c0698b9ad60759f3ca"
  },
  {
    "url": "/_nuxt/pages/gallery/index.756e514b3ae48ced7d9d.js",
    "revision": "6eb20f1312c997f8fc8363622fa68d9d"
  },
  {
    "url": "/_nuxt/pages/index.a67dc34f65752e898ada.js",
    "revision": "aec69ddea7d32720230d46995f31dba5"
  },
  {
    "url": "/_nuxt/pages/info/_page.619a49bc6c35a69cac26.js",
    "revision": "5e167671e021f778a5849db316dbd884"
  },
  {
    "url": "/_nuxt/pages/info/index.8435b5aaf4c63d33da84.js",
    "revision": "07672f91a7075c5cb7e0988c4a58517c"
  },
  {
    "url": "/_nuxt/pages/shop/index.090ca037f36d7accb778.js",
    "revision": "40aa2a87021237c1b205c2b27abc6087"
  },
  {
    "url": "/_nuxt/pages/successMessage.28c973104daa10525321.js",
    "revision": "ae719fe4fb723a6d4d50f85bb8238d37"
  },
  {
    "url": "/_nuxt/pages/successNews.7e992ac1bf9b477b7062.js",
    "revision": "8c63387a58f22aa48a080cadbdb9c473"
  },
  {
    "url": "/_nuxt/vendor.af4cd52ce0c4e3be78ac.js",
    "revision": "f6eb597b05a07426265548b299ab0565"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

