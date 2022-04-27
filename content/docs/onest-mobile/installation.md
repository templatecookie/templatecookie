---
title: Installation
description: Installation documentation
position: 2
category: "Getting Started"
---

# Installation

### Setting up the developmenet environment

#### NodeJS

Make sure you’re using recent version of node (12 LTS or later) installed globally.

For Mac users, we recommend installing Node using Homebrew. Run the following commands in a Terminal after installing Homebrew

```
brew install node
```

#### Watchman (For Mac users only)

Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

We recommend installing Watchman using Homebrew. Run the following commands in a Terminal after installing Homebrew:

```
brew install watchman
```

#### React Native CLI

If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues.
You can access it without installing anything globally using npx, which ships with Node.js

#### Yarn

Please follow yarn official documentation to install it properly https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

#### Xcode Installation

The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app. If you have already installed Xcode on your system, make sure you’re downloading newst version odf it.

#### Command Line Tools

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences" from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

![](/docs/onest-mobile/installation/CommandLineTools.png)

#### Installing an iOS simulator in Xcode

To install a simulator, open Xcode > Preferences  and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

#### CocoaPods

CocoaPods is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager; however, we recommend that you use the standard Ruby available on macOS unless you know what you're doing. Using the default Ruby install will require you to use sudo when installing gems. (This is only an issue for the duration of the gem installation, though.) sudo gem install cocoapods For more information, please visit CocoaPods Getting Started guide.
