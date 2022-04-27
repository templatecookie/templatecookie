---
title: Folder Structure
description: Folder Structure
position: 3
category: "Getting Started"
---

#### src folder

- assets
- components
- constants
- navigation
- screens
- services
- shared
- utils

#### assets

In assets folder, you will all of the images are kept on the basis of the specific page.

#### components

components folder is most importantly use, you will find all the components used in this template.

#### constants

All the theming related files are here including icons and themes

- Icons.js → all the svg icons path are present in this file.
- Themes.js → all the theming/color related references are here.

#### Navigation

All the Navigation related logics are in this folder including bottom tab navigator.

versions:

```javascript
   "@react-navigation/bottom-tabs": "^6.2.0",
   "@react-navigation/native": "^6.0.8",
   "@react-navigation/native-stack": "^6.5.0",
```

#### Screens

All the screens are present in this folder.

- Account
- adsScreen
- Authentication
- Home
- Message
- Notification
- Onboarding
- postAds
- Search
- Checkout screen
- And more….

#### Services

All the api calling services are here separately.

#### Utils

All the datas are stored in this folder including async storage and dummy arrays.
Push notification services are controlled within this screen.
