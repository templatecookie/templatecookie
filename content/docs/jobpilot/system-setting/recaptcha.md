---
title: Recaptcha Setting
position: 6
category: System Setting
---

### Captcha

reCAPTCHA is a free CAPTCHA service that helps protect your site against spam, malicious registrations and other forms of attacks where computers try to disguise themselves as a human. reCAPTCHA comes in the form of a widget that you can easily add to your blog, forum, registration.

**How to setup.**

*   Visit [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
*   Follow the steps by select the reCAPTCHA v2 and get your **site key** and your **secret key**.

**Admin panel setup**

*   Go to the **Admin panel** -> **Settings** -> **General** -> **Security**
*   Enable the feature from the '**Enable reCAPTCHA**' field
*   Set '**reCAPTCHA site key**' and '**reCAPTCHA secret key**'
*   And save your changes.

**Or use `/.env` file setup**

*   Login to your FTP account
*   Open `/.env` file.
*   Provide the keys there.
```
    RECAPTCHA_VERSION=your-recaptcha-keys-version
    RECAPTCHA_SITE_KEY=your-recaptcha-site_key
    RECAPTCHA_SECRET_KEY=your-recaptcha-secret_key
```

*   Replace `your-recaptcha-keys-version` (by **v2**), replace `your-recaptcha-site_key` and `your-recaptcha-secret_key` by your keys.
*   Save the file.
*   You are done.

NOTE: The `/.env` file settings override those of the admin panel.
