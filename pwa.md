Are PWA the future of web development?
===
![](pics/future.jpg)

---


```
return (
  <Profile 
    name="Oren Golan">
    job="SDM, Amazon Video"
    location="Seattle"
  </Profile>
)
```
![](pics/amazon-video.jpg)

---

# What are PWA
(the developer's version)

Native-level experience that works reliably on both desktop & mobile. Key concepts are performance & responsiveness.

---

# What are PWA
(the product manager version)

A way to increase
- Conversion rate
- Page visits
- Time spent on app
-

---
# Show case
![](pics/ali.png)

---

show FT or twitter

---

not everyone lives in a wealthy nation
show screenshot of my apps

---

# How to achieve native-level experince?

- Available offline/weak network using Service Worker.
- Measure peformance with a tool called lighthouse.
- Icon on home screen.
- (Android/Mozilla/IE) App-like 'loading' page, no URL, push notification and more.

---

# Apple
![](pics/apple.jpg)

---

# Webpack

 * [dynamic bundle splitting](https://webpack.js.org/guides/code-splitting-async/)
 * [tree-shaking capabilities](https://webpack.js.org/guides/tree-shaking/)

---

[The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern)

* Render initial route - prerender
* Push: serve (by default) creates a simplehttp2server, which is a HTTP2/Push server. You can check the console for verification.
* Precache: The service worker is configured for offline use.
* Lazy-Load: Automatic code-splitting for routes and shared "chunks" are optimized for reuse. Navigating from /about to /contact will dynamically (or "lazily") load the "contact" bundle and any associated chunks. This is all thanks to webpack.

---
