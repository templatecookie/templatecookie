---
title: Social Media Login
position: 16
category: How to Tutorial
---

# Social Login

**Important:** Make sure APP_URL in `/.env` file matches your site url. It should be set automatically, but you might need to do it manually in some rare cases.

### Facebook

1.  Register for regular Facebook account, if you don't already have one.
2.  Open [this url](https://developers.facebook.com/), and **Create a New App.**
3.  Get the new app settings.

Now, you have to setup your admin panel:

*   Go to your **Admin panel** -> **Settings** -> **Website Setting** -> **Social Login**
*   For Facebook: set '**Facebook Client ID**' and '**Facebook Client Secret**'
*   And save your changes.
*   You are done.

Or place all the config values or API keys in the `/.env` file.

Facebook example in `/.env` file
```
FACEBOOK_CLIENT_ID=your-facebook-client_id
FACEBOOK_CLIENT_SECRET=your-facebook-client_secret
```
NOTE:

*   The `/.env` file settings override those of the admin panel.
*   The "**OAuth redirect URI**" is: (`http://` or `https://`) `domain.tld/auth/facebook/callback` or `www.domain.tld/auth/facebook/callback`

### LinkedIn

1.  Register for regular LinkedIn account, if you don't already have one.
2.  Open [this url](https://www.linkedin.com/developer/apps), and **Create a New App.**
3.  Get the new app settings.

Now, you have to setup your admin panel:

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Social Login**
*   For LinkedIn: set '**LinkedIn Client ID**' and '**LinkedIn Client Secret**'
*   And save your changes.
*   You are done.

Or place all the config values or API keys in the `/.env` file.

LinkedIn example in `/.env` file

```
LINKEDIN_CLIENT_ID=your-linkedin-client_id
LINKEDIN_CLIENT_SECRET=your-linkedin-client_secret
```

NOTE:

*   The `/.env` file settings override those of the admin panel.
*   The "**OAuth redirect URI**" is: (`http://` or `https://`) `domain.tld/auth/linkedin/callback` or `www.domain.tld/auth/linkedin/callback`

### Twitter

1.  Register for regular Twitter account, if you don't already have one.
2.  Open [this url](https://apps.twitter.com/), and **Create a New App.**
3.  Get the new app settings.

Now, you have to setup your admin panel:

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Social Login**
*   For Twitter: set '**Twitter Client ID**' and '**Twitter Client Secret**'
*   And save your changes.
*   You are done.

Or place all the config values or API keys in the `/.env` file.

Twitter example in `/.env` file
```
TWITTER_CLIENT_ID=your-twitter-client_id
TWITTER_CLIENT_SECRET=your-twitter-client_secret
```
NOTE:

*   The `/.env` file settings override those of the admin panel.
*   The "**OAuth redirect URI**" is: (`http://` or `https://`) `domain.tld/auth/twitter/callback` or `www.domain.tld/auth/twitter/callback`
*   And before configuring your Twitter app in the script, you have to change its Permissions (on developer.twitter.com) by enabling the "**Request email address from users**" option.
