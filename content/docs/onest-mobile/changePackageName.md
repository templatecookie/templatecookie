---
title: Change package name
description: Follow these steps for changing your app name
position: 3
category: "App Customization Guideline"
---

#### Change Package Name for Android

To change the app name in react native first go to your project folder and open this path in VScode **android/app/src/main/res/values/string.xml**

Now you can easily change the app name in the string tag. For example:

```javascript
<string name="app_name">YOUR_APP_NAME</string>
```

After changing the app name, uninstall the previous app from your device and run these commands:

```bash
$ cd android
$ ./gradlew clean
$ cd ..
$ react-native run-android
```

#### Change Package Name for iOS

Open info.plist, change the value after the key to your app name. Eg.

```bash
<key>CFBundleDisplayName</key>
<string>My New App Name</string>
```

Now uninstall the previous app from your device. Run

```bash
$ npm install
$ cd ios && pod install
```

Now simply, you can install the new app on your device.
