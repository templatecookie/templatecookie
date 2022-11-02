---
title: Map Setting
position: 6
category: System Setting
---

## Google Maps

You have to activate [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/guide) and [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key#get-an-api-key) in your Google Console.

Admin panel setup
*   Go to your **Admin panel** -> **Settings** -> **General** -> **Others**
*   Set ‘**Google Maps key**‘
*   And save your changes.

Or use /.env file setup
*   Login to your FTP account.
*   Open and edit `.env` file.
*   Add this code:

```GOOGLE_MAPS_API_KEY=your-googlemaps-key```

*   Replace `your-googlemaps-key`.
*   Save and upload the file.
*   You are done.
