## 1. Setup
Monitor
```
xrandr --output $(xrandr | grep " connected" |tail -n 1| awk '{print $1}') --auto --same-as LVDS1
```

Font size - huge

## 2. PWA example (1 min video)
```
m ~/t/pwa/pwa-examples.mp4
```

## 3. PWA overview (5 min ignite style presentation)
```
impressive --auto 15 --auto-progress --nologo ~/p/pwa-talk/README.pdf
```

### 4. Static web app (live coding, 10 min)
```
chromium-browser ~/p/pwa-talk/static-pwa/index.html
cd ~/p/pwa-talk/static-pwa
v index.html style.css manifest.json
```

### 5. Preact (live coding, 10 min)
```
cd ~/p/pwa-talk/app
git checkout v1.0.0-preact-cli
preact watch
chromium-browser "http://localhost:8080"
git checkout v1.0.1-two-ponies
git checkout master
```
