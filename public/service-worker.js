if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Sq33ePUk5p9xygRDqveCQ/_buildManifest.js",revision:"b222cbf4d8e1f47e27a8925222733e53"},{url:"/_next/static/Sq33ePUk5p9xygRDqveCQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-920a46b5e6d0f664.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/2052-73b18ed2c32038e0.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/2060-f1452a2f8ced90bf.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/231-041181ae3fb517fe.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/2870-4a8d963d820b1211.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/3236-cebe09f31b453978.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/3376-b3d0687c7614caa9.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/3916-79d89816384f0855.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/4229-7c4604ab6faf0636.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/4236-f8d92aa3629e7c48.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/4396-61d5c4337be082af.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/5205-cd88b3490b7c5f43.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/5223-289c183426cd0331.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/6789-93fd40d17c30027a.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/7503-1559716c8174a9e6.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/8173-492997fd488e91cc.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/8360-c74931952f7e49b1.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/8539-9eed02521af6b3d7.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/8966-5f5665b75d71c852.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/9087-82332d88dd4b31b8.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/9384-4f1f555e11740d6a.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/9797-5b5670e9d5de99d6.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(auth)/error/page-93554bfb82efc46f.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(auth)/layout-18a6096e4c3eec7a.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(auth)/login/page-6c7ba612e0517cde.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(auth)/new-password/page-8ea7e25f65410ac6.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(auth)/new-verification/page-248bcc8e6a920207.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(auth)/register/page-cab59e80680531b7.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(auth)/reset/page-a0ca7edfbdf3d09f.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/billing/loading-b380084efb8e76b1.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/billing/page-62b669a4fdd61d44.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/loading-9df617c38e2b227f.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/page-6a4def204f62799f.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/settings/loading-9b9ec01fb91e2d59.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/settings/page-072037a0233ff9cc.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(dashboard)/layout-d0ff7ccd051eb9ed.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(docs)/docs/%5B%5B...slug%5D%5D/page-e406789f5405268c.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(docs)/docs/layout-385b04251dcc85a6.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(docs)/guides/%5B...slug%5D/page-6eaa4ba42e82c879.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(docs)/guides/%5Bslug%5D/page-53d5d35707f011b2.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(docs)/guides/layout-de37c4e0dafc5a88.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(docs)/guides/page-18ff4210b819e926.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(docs)/layout-90e9fa25e4c992c7.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/%5B...slug%5D/page-1b7092209112553e.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/%5Bslug%5D/page-6e3f7703f96051d1.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/blog/%5B...slug%5D/page-faccf9ed28f82389.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/blog/%5Bslug%5D/page-c4a0cb2938d2b8ce.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/blog/page-16c9f6bbd84a857a.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/error-d6cf43f0d6dcb08c.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/layout-1fcbbfb9a57003c6.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/page-ebd183a0d09b30a8.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/pricing/loading-6e7e447415db5fa0.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/(marketing)/pricing/page-076562a9dc2defad.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/_not-found/page-954d35c12202538f.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/app/layout-43e0a7af653d5e30.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/fd9d1056-c76ae656a389fc9f.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/main-6d81b53ceb64f355.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/main-app-2ce3998c4d9f78e9.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-548999787f85bccb.js",revision:"Sq33ePUk5p9xygRDqveCQ"},{url:"/_next/static/css/45a6a8d6489d6174.css",revision:"45a6a8d6489d6174"},{url:"/_next/static/css/9199a82b6246fc95.css",revision:"9199a82b6246fc95"},{url:"/_next/static/css/b26f3cb99e3cf977.css",revision:"b26f3cb99e3cf977"},{url:"/_next/static/media/01af0fc7b4278e65-s.p.woff2",revision:"6fa778aa9ee280df9ff563f3a08b0350"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/8cdee4d3ed444abc-s.woff2",revision:"420e1e96628860fae605e46bd196926d"},{url:"/_next/static/media/90475aac776488b6-s.p.woff2",revision:"183db31d6365283bef4914042be9dfab"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-chrome-192x192.png",revision:"b978b46f31a53cc58dee7658950d7ae5"},{url:"/android-chrome-512x512.png",revision:"3bcd5e4781b970a5043988462ed924cd"},{url:"/apple-touch-icon.png",revision:"b5d3ba9c2426ac2cf48d3624dbea5acb"},{url:"/favicon-16x16.png",revision:"e8b487ad7a04f0d411efa33d0fdfa68c"},{url:"/favicon-32x32.png",revision:"e329308917ffa92f6518b0a6046247f7"},{url:"/favicon.ico",revision:"6786dbd147bc4f2bda288a45c68ae582"},{url:"/images/avatars/shadcn.png",revision:"1ebc04fb857b879fe9063a8b92ec80e6"},{url:"/images/blog/blog-post-1.jpg",revision:"d91bb1224212bd1a832f99fe7494554f"},{url:"/images/blog/blog-post-2.jpg",revision:"04442fcb79e9538e65be3476b2b6aa3a"},{url:"/images/blog/blog-post-3.jpg",revision:"a758717dd624c5900385151290cf378d"},{url:"/images/blog/blog-post-4.jpg",revision:"135c157ecc4dfcbac1ebe27a04f40d84"},{url:"/images/hero.png",revision:"5718b93a1e7a8e94f8193223346132ea"},{url:"/images/work-from-home.jpg",revision:"1892fd363d13952e90f18ac23404e619"},{url:"/og.jpg",revision:"3f0532018b0ffab9ed82429885232fac"},{url:"/site.webmanifest",revision:"e63f29dfc9f54c12167cdf2545ea80d0"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
