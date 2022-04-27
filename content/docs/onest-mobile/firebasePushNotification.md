---
title: Firebase push notification
description: Follow these steps for push notification
position: 3
category: "App Customization Guideline"
---

#### Firebase push notification for Android

To enable push notifications, you have set up a firebase project. Please follow the steps below.

- First go to the [Firebase Console](https://firebase.google.com/) and sign in with your gmail account and go to the console.
- Create a project by your app name. And go to the project overview and click on the **plus icon** and then click on the **Android Icon**.

![](/docs/onest-mobile/firebase/firebase1.png)

- Enter your android package name. Your package name should be like **com.your_name.your_app_name** . Like **com.microsoft.skype**. You can use the same package name for android & iOS. iOS doesn’t support **underspace** in the package name. So, keep in mind that if you want to use the same package name for both android & iOS.

![](/docs/onest-mobile/firebase/firebase2.png)

- Click on the register app and skip other steps by clicking next.
- Now go to project settings and click on the android icon and download **google-service.json** file.

![](/docs/onest-mobile/firebase/firebase3.png)

- Now go to Onest/android/app directory and paste the google-service.json file here.

![](/docs/onest-mobile/firebase/firebase4.png)

Cool, push notification setup for android is complete😎

#### Firebase push notification for iOS

You can skip this step if you don’t want to build this app for iOS.

- Now, go to your firebase console and now click on the **iOS icon** and enter your iOS package name and click on the **Register app** and skip the other steps.

- Now go to project settings and click on **iOS** and download the **GoogleService-info.plist** file.

- Then go to **Onest/ios/Runner** directory and paste the file here.

- Now, Open the **iOS folder** on Xcode by right clicking on the iOS folder from VSCode or Android Studio and go to the runner folder and drag & drop the **GoogleService-info.plist** file here. You will get a popup and click yes or confirm the popup message. That’s it.

- Now follow these additional steps from the react native team [here](https://rnfirebase.io/messaging/usage/ios-setup). This is a well written doc. You can ignore the optional steps.
