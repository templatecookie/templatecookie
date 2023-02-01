---
title: Recaptcha Setting
position: 6
category: Getting Started
---

# Captcha Setup

reCAPTCHA is a free CAPTCHA service that helps protect your site against spam, malicious registrations and other forms of attacks where computers try to disguise themselves as a human. reCAPTCHA comes in the form of a widget that you can easily add to your blog, forum, registration.

### Get API keys

- Visit [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
- Follow the steps by select the reCAPTCHA v2 and get your **site key** and your **secret key**.

### Set API keys from Admin panel
- Go to the **Admin panel** -> **Settings** -> **General** -> **Recaptcha Configuration**
- Enable the feature from the '**Enable reCAPTCHA**' field
- Set '**reCAPTCHA site key**' and '**reCAPTCHA secret key**'
- And save your changes.

### Or use `/.env` file
- Login to your FTP account and Open `.env` file.
- Set your keys in `.env` file. Example below
- replace `your-recaptcha-site_key` and `your-recaptcha-secret_key` with your keys.
- Save the file.

```
    NOCAPTCHA_SITEKEY=your-recaptcha-site_key
    NOCAPTCHA_SECRET=your-recaptcha-secret_key
    NOCAPTCHA_ACTIVE=true
```

NOTE: The `/.env` file settings override those of the admin panel.
