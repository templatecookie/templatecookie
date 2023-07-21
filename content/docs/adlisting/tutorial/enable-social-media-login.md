---
title: Social Media Login
position: 16
category: System Setting
---

# Social Login

**Important:** Make sure APP_URL in `/.env` file matches your site url. It should be set automatically, but you might need to do it manually in some rare cases.

### Google

1.  Register for regular Google account, if you don't already have one.
2.  Open [Google Console](https://console.developers.google.com/), and **Create a New Project.**
3.  After the **Create a New project** open the created project
4.  Now open Credentials from left menu, click Create Credentials and select QAuth client ID.
5.  On the Create OAuth client ID page, click Application type and then click Web application:
6.  Type a name for your new OAuth client in the Name field:
7.  In the Authorized JavaScript origins section, enter the JavaScript Origin URL (`http://domain.com` or `https://domain.com`) and In the Authorized redirect URLs section, (`http://` or `https://`) `domain.com/auth/google/callback` or `www.domain.com/auth/google/callback`
8.  Click Create.
9.  In the OAuth client created dialog box, copy and store the client ID and the client secret. These values are required in order to configure Google as a social login provider
10. Get the new app settings.

Now, you have to setup your admin panel:

- Go to your **Admin panel** -> **Settings** -> **Website Setting** -> **Social Login**
- For Google: set '**Google Client ID**' and '**Google Client Secret**'
- And save your changes.
- You are done.

Or place all the config values or API keys in the `/.env` file.

Google example in `/.env` file

```
GOOGLE_CLIENT_ID=your-google-client_id
GOOGLE_CLIENT_SECRET=your-google-client_secret
```

### Facebook

1.  Register for regular Facebook account, if you don't already have one.
2.  Open [this url](https://developers.facebook.com/), and **Create a New App.**
3.  Get the new app settings.

Now, you have to setup your admin panel:

- Go to your **Admin panel** -> **Settings** -> **Website Setting** -> **Social Login**
- For Facebook: set '**Facebook Client ID**' and '**Facebook Client Secret**'
- And save your changes.
- You are done.

Or place all the config values or API keys in the `/.env` file.

Facebook example in `/.env` file

```
FACEBOOK_CLIENT_ID=your-facebook-client_id
FACEBOOK_CLIENT_SECRET=your-facebook-client_secret
```

NOTE:

- The `/.env` file settings override those of the admin panel.
- The "**OAuth redirect URI**" is: (`http://` or `https://`) `domain.tld/auth/facebook/callback` or `www.domain.tld/auth/facebook/callback`

### LinkedIn

1.  Register for regular LinkedIn account, if you don't already have one.
2.  Open [this url](https://www.linkedin.com/developer/apps), and **Create a New App.**
3.  Get the new app settings.

Now, you have to setup your admin panel:

- Go to your **Admin panel** -> **Settings** -> **General** -> **Social Login**
- For LinkedIn: set '**LinkedIn Client ID**' and '**LinkedIn Client Secret**'
- And save your changes.
- You are done.

Or place all the config values or API keys in the `/.env` file.

LinkedIn example in `/.env` file

```
LINKEDIN_CLIENT_ID=your-linkedin-client_id
LINKEDIN_CLIENT_SECRET=your-linkedin-client_secret
```

NOTE:

- The `/.env` file settings override those of the admin panel.
- The "**OAuth redirect URI**" is: (`http://` or `https://`) `domain.tld/auth/linkedin/callback` or `www.domain.tld/auth/linkedin/callback`

### Twitter

1.  Register for regular Twitter account, if you don't already have one.
2.  Open [this url](https://apps.twitter.com/), and **Create a New App.**
3.  Get the new app settings.

Now, you have to setup your admin panel:

- Go to your **Admin panel** -> **Settings** -> **General** -> **Social Login**
- For Twitter: set '**Twitter Client ID**' and '**Twitter Client Secret**'
- And save your changes.
- You are done.

Or place all the config values or API keys in the `/.env` file.

Twitter example in `/.env` file

```
TWITTER_CLIENT_ID=your-twitter-client_id
TWITTER_CLIENT_SECRET=your-twitter-client_secret
```

NOTE:

- The `/.env` file settings override those of the admin panel.
- The "**OAuth redirect URI**" is: (`http://` or `https://`) `domain.tld/auth/twitter/callback` or `www.domain.tld/auth/twitter/callback`
- And before configuring your Twitter app in the script, you have to change its Permissions (on developer.twitter.com) by enabling the "**Request email address from users**" option.

### Github

1.  Register for regular Twitter account, if you don't already have one.
2.  Open [this url](https://github.com/settings/applications/new), and **Create a New App.**
3.  For first-timers, you must register a new application, click the **Register a new application** button, and fill in the required information.
4.  Enter the details for the application.
5.  Set **Authorization Callback URL** : (`http://` or `https://`) `domain.tld/auth/github/callback` or `www.domain.tld/auth/github/callback`
6.  Click the **Register Application** button
7.  Go to your **Settings** -> **Developer Settings** -> **OAuth Apps** -> **Click on your registered app**. Now you can see **CLIENT ID** and **CLIENT SECRET**
8.  Get the new app settings.

Now, you have to setup your admin panel:

- Go to your **Admin panel** -> **Settings** -> **General** -> **Social Login**
- For Github: set '**Github Client ID**' and '**Github Client Secret**'
- And save your changes.
- You are done.

Or place all the config values or API keys in the `/.env` file.

github example in `/.env` file

```
GITHUB_CLIENT_ID=your-github-client_id
GITHUB_CLIENT_SECRET=your-github-client_secret
```
