---
title: reCAPTCHA Guide
position: 6
category: Getting Started
---

### Generate reCAPTCHA secret and API key:

1. Go to the reCAPTCHA website: [reCAPTCHA](https://www.google.com/recaptcha).
2. Click on the "Admin Console" button in the upper-right corner of the page.
3. Sign in with your Google account credentials. If you don't have a Google account, you'll need to create one.
4. Once signed in, you'll be taken to the "reCAPTCHA Admin Console."
5. On the Admin Console page, click on the "+ Add" button at the top right to register a new site.
6. In the "Label" field, enter a name for your site. This can be any name to help you identify the site associated with the reCAPTCHA keys.
7. In the "reCAPTCHA type" section, select the appropriate reCAPTCHA version you want to use. The options are "reCAPTCHA v2" or "reCAPTCHA v3." Choose the version that best fits your requirements.
8. In the "Domains" field, enter the domain name(s) where you intend to use the reCAPTCHA. You can enter multiple domains separated by commas if needed.
9. Accept the reCAPTCHA Terms of Service by checking the box.
10. After completing the necessary fields, click on the "Submit" button.
11. On the next page, you'll see your generated reCAPTCHA site key and secret key. The site key is used on the frontend (client-side), while the secret key is used on the backend (server-side) for verification purposes.
12. Copy and securely store the site key and secret key, as you'll need them in your website or application's implementation.

Remember to keep your secret key confidential and avoid exposing it in publicly accessible code or repositories.
That's it! You have successfully generated your reCAPTCHA secret and API key.
