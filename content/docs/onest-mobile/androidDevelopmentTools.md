---
title: Android Development Tools
description: Android Development Tools
position: 2
category: "Development Tools"
---

# Android Development Tools

#### Java Development Kit

We recommend installing JDK using Homebrew. Run the following commands in a Terminal after installing Homebrew:

```
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```

If you have already installed JDK on your system, make sure it is JDK 8 or newer.

## Setup android development environment

#### Install android studio

- Download and install Android Studio. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:
- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM) (See here for AMD or Hyper-V)
- Android virtual device
- Then, click "Next" to install all of these components. If the checkboxes are grayed out, you will have a chance to install these components later on. Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

#### Install Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio. The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

![](/docs/onest-mobile/installation/AndroidStudio1.png)

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK. Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

- Android SDK Platform 28
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
- Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected. Finally, click "Apply" to download and install the Android SDK and related build tools.

#### Configure the ANDROID_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.
Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc config file:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

`.bash_profile` is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file.

Type  `source $HOME/.bash_profile` to load the config into your current shell. Verify that `ANDROID_HOME` has been added to your path by running `echo $PATH`.

#### Running your React Native application

Firstly inside your react native project folder, you need to run `yarn install` to install all the required packages of the apps.

#### Running on a simulator

Run `yarn ios` or `yarn android`

#### Running on a device

The above command will automatically run your app on the iOS Simulator by default. If you want to run the app on an actual physical iOS device, please follow the instructions [Running On Device](https://reactnative.dev/docs/running-on-device).
