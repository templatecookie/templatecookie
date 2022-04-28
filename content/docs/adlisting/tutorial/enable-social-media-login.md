---
title: Enable Social Media Login
position: 17
category: How to Tutorial
---

#### How to login with Social Media

##### Facebook

1.  Register for regular Facebook account, if you don't already have one.
2.  Open [this url](https://developers.facebook.com/), and **Create a New App.**
3.  Get the new app settings.

Now, you have to setup your admin panel:

- Go to your **Admin panel** -\> **Settings** -\> **General** -\> **Social Login**
- For Facebook: set '**Facebook Client ID**' and '**Facebook Client Secret**'
- And save your changes.
- You are done.

NOTE:

- The `/.env` file settings override those of the admin panel.
- The "**OAuth redirect URI**" is: (`http://` or `https://`) `domain.tld/auth/facebook/callback` or `www.domain.com/auth/facebook/callback`

##### Google

1.  Register for regular Google account, if you don't already have one.
2.  Open [this url](https://console.developers.google.com/), and **Create a New App.**
3.  Get the new app settings.

Now, you have to setup your admin panel:

- Go to your **Admin panel** -\> **Settings** -\> **General** -\> **Social Login**
- For Google: set '**Google Client ID**' and '**Google Client Secret**'
- And save your changes.
- You are done.

NOTE:

- The `/.env` file settings override those of the admin panel.
- The "**OAuth redirect URI**" is: (`http://` or `https://`) `domain.tld/auth/google/callback` or `www.domain.com/auth/google/callback`
