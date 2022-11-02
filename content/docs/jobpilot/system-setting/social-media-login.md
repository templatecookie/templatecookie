---
title: Social Media Login
position: 12
category: System Setting
---

### Social Login

**Important:** Make sure APP_URL in `/.env` file matches your site url. It should be set automatically, but you might need to do it manually in some rare cases.

### Facebook

1.  Register for regular Facebook account, if you don't already have one.
2.  Open [this url](https://developers.facebook.com/), and **Create a New App.**
3.  Get the new app settings.

Now, you have to setup your admin panel:

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Social Login**
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

LINKEDIN_CLIENT_ID=your-linkedin-client_id
LINKEDIN_CLIENT_SECRET=your-linkedin-client_secret

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

TWITTER_CLIENT_ID=your-twitter-client_id
TWITTER_CLIENT_SECRET=your-twitter-client_secret

NOTE:

*   The `/.env` file settings override those of the admin panel.
*   The "**OAuth redirect URI**" is: (`http://` or `https://`) `domain.tld/auth/twitter/callback` or `www.domain.tld/auth/twitter/callback`
*   And before configuring your Twitter app in the script, you have to change its Permissions (on developer.twitter.com) by enabling the "**Request email address from users**" option.



### Geolocation

##### How can I enable Geolocation?

*   Visit the **Admin panel** -> **Settings** -> **General** -> **Geolocation**
*   Check the '**Enable Geolocation**' field.
*   Select a '**GeoIP Driver**' - NOTE: By selecting a GeoIP driver/service, its website link (and if required, API/license key/token fields) will be shown.
*   (If available) Get the GeoIP service API key/token (or license key) and insert it in the geolocation settings form.
*   By selecting '**maxmind.com (Database)**' as GeoIP service, you have to:

    1.  Go to: [https://dev.maxmind.com/geoip/geoip2/geolite2/](https://dev.maxmind.com/geoip/geoip2/geolite2/)
    2.  Download the latest binary version of the 'GeoLite2-City.mmdb' database.
    3.  Extract it in the Maxmind database folder at `/storage/database/maxmind/` like this `/storage/database/maxmind/GeoLite2-City.mmdb`
        You can replace the current file (if exists) to update the Maxmind database.

    NOTE: It's important to note that the lite (free) versions of the Maxmind databases are not accurate. Please check out this link for more information: [https://support.maxmind.com/geolite-faq/](https://support.maxmind.com/geolite-faq/).
*   If you want to redirect users to their country's website based on their IP address, you should leave blank the parameter "**Default Country**".
    IMPORTANT: When you reset this option by setting a default country, you need clear all your browser's session and cookies (and other data like: hosted app\\'s data and cache, etc.) to see the effect of the change.
*   You are done.

### Languages

##### How can I add new languages?**

*   Go to your **Admin panel** -> **Settings** -> **Languages**
*   Click on **Add language**
*   Go to the translation folder at `/lang`
*   The script will already have duplicate the folder `/lang/en/` to `/lang/<abbr>/`

**Notes:**

*   Don't forget to translate the database translatable entries from the Admin panel (Users -> Titles/Genders, Listings -> Listing Types, Listings -> Categories, Settings -> Packages, Settings -> Report Type, etc.).
*   If need, you have to duplicate (manually, in this same directory) or edit the date language's file in the: `/vendor/nesbot/carbon/src/Carbon/Lang/` directory.

##### How can I change the default language?**

*   Go to your **Admin panel** -> **Settings** -> **Languages**
*   Create a new language entry and check the "Default" field. Or click on Edit to edit an existing language and check "Default".
*   Save all of changes
*   You are done.

**Note:** To prevent the missing translations in the new default language, please open the file `/config/app.php` and change the `fallback_locale` value with your default language `<abbr>` value (e.g. `de`). Save your files on your server.

##### How can I edit translations?**

*   Go to the translation folder at `/lang/`(each language has his language code as folder name).
*   Go to the folder of the language you wish to translate and their files (e.g. `global.php` contains 90% of the site’s texts, mail.php for emails contents, etc.).
*   To translate a file, you must change the values and not the keys of PHP array.
*   Save your files on your server.
*   Your are done.

**Important:** It's important to know that the Admin panel does not support the RTL direction.

**Notes:**

*   Don't forget to translate the database translatable entries from the Admin panel (Users -> Titles/Genders, Listings -> Listing Types, Listings -> Categories, Settings -> Packages, Settings -> Report Type, etc.).
*   If need, you have to duplicate (manually, in this same directory) or edit the date language's file in the: `/vendor/nesbot/carbon/src/Carbon/Lang/` directory.

##### How can I disable languages?**

*   Go to your **Admin panel** -> **Settings** -> **Languages**
*   Select a language and edit it.
*   Uncheck "Active" checkbox and save.

##### How can I delete languages?**

*   Go to your LaraClassifier **Admin panel** -> **Settings** -> **Languages**
*   Select a language and delete it.

**Important:** By deleting the language, the language files folder `/lang/<abbr>` will be also removed.

### How To

##### How can I set the Default country?**

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Geo Location** and set '**Default Country**' with your country code (only ISO alpha-2 codes are accepted). From v2.x or above the script set the default country during installation.
*   Your are done.

##### How can I set the Default currency?**

*   The default currency will be that of the current country, except the Packages's currency that you can set from  **Admin panel** -> **Settings** -> **Packages**.

##### How can I setup the packages/Plans?**

*   Go to your **Admin panel** -> **Settings** -> **Packages**
*   Select a package and edit it
*   NOTE: You can add new packages or delete current packages in the actual version.

##### How can I setup the advertising code (e.g. Adsense)?**

*   Go to your **Admin panel** -> **Settings** -> **Advertisings**
*   Edit '**top**' and '**bottom**' code.
*   The code will be displayed on the search results pages and the listings page.
*   Your are done.

##### How can I setup Recaptcha?**

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Security**
*   Turn ON or OFF '**Enable reCAPTCHA**'
*   Set '**reCAPTCHA public key**' and '**reCAPTCHA private key**'
*   And save your changes.

Please see more features by visiting your **Admin panel** -> **Settings**...

