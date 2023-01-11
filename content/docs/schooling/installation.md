---
title: Installation
description: Installation documentation
position: 2
category: Getting Started
---

<!--more-->

## Installation - Server Requirements

Before you install <strong> Schooling </strong> make sure your server meets the following requirements:

- Server Type: Linux (Shared / VPS / Dedicated)
- PHP >= 7.3
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

# How To Setup In a server (CPanel)


<hightlight-block>
<template>

# Hosting Recommendation

We recommend you to setup this application on cloud server. Cloud server is great for SPA, in terms of speed, security and scalibitly.

We recommend Digitalocean, Vultr, Linode and AWS

[Bluehost Shared Hosting](https://www.bluehost.com/track/webzakir/)
[Digitalocean Cloud Hosting](http://go.templatecookie.com/digitalocean)

</template>
</hightlight-block>

## Step 1:

Login to your shared hosting and go to file manager.

![Step 1](/docs/schooling/s1.png)

## Step 2:

go to `public_html` Folder and click on upload button.
![Step 2](/docs/schooling/s2.png)

## Step 3:

click on "Select File" and choose app.zip file.
![Step 2](/docs/schooling/s2.png)

## Step 4:

Wait for the completation and close the tab once it is finished.
![Step 4](/docs/schooling/s4.png)

## Step 5:

Reload the file manager and extract the file following the screenshot.
![Step 5](/docs/schooling/s5.png)
![Step 6](/docs/schooling/s5_2.png)

## Step 6:

We need to setup 775 permission on these 4 folders and 1 file. Let's do this

- `storage/framework`
- `bootstrap/cache`
- `storage/logs`
- `resources/js/locales`
- `.env`

## Step 7:

Select the storage folder and follow the screenshot. Similarly, give permission to above folders/files
![Step 7](/docs/schooling/s7.png)

## Step 8:

Go to bootstrap folder & select cache folder and folow the same process.
![Step 8](/docs/schooling/s8.png)

## Step 9:

Got to the storage folder and follow the same process as below.
![Step 9](/docs/schooling/s9.png)

## Step 10:

We need a database for the next step. Let's create a database by clicking on "MYSQL Database Wizard" form shared hosting.
![Step 10](/docs/schooling/s10.png)

## Step 11:

Enter the database and click `Next Step`.
![Step 11](/docs/schooling/s12.png)

## Step 12:

Enter the database user name & password. Click on `Create User`.
![Step 12](/docs/schooling/s13.png)

## Step 13:

Save database name and database user name. Select All Permission and Click on `Next Step`.
![Step 13](/docs/schooling/s14.png)

## Step 14:

We are going to import demo database. From cpanel open `phpmyadmin` app. Then select your database and click on import.
![Step 14](/docs/schooling/s18.png)
![Step 14](/docs/schooling/s14_2.png)

## Step 15:

Choose the backup database from your computer and click on "Go" Button.
![Step 15](/docs/schooling/s19.png)

## Step 16:

Now we need to setup database credentails in our app config. Go to your application folder and follow the screenshot.
![Step 16](/docs/schooling/s15.png)
![Step 16](/docs/schooling/s16.png)

## Step 17

Carefully, Set necessery details marked in the screenshot. .
![Step 17](/docs/schooling/s17.png)

<call-out-block type="warning">
<template>

## Attention!

To avoid error, Please set the `SESSION_DOMAIN` & `SANCTUM_STATEFUL_DOMAINS` property value properly by following the example below!

![local server](/docs/schooling/localserver-demo.png)
![Domain Demo](/docs/schooling/localserver-demo.png)
</template>

</call-out-block>

## Step 18:

Congratulations 🎉🎉🎉 You have installed the application successfully. Go to your domain and view the app. You can use the demo credentails to login
![Step 18](/docs/schooling/s21.png)

## Wait a Minute!

Use the credentials listed below to login to the app.

> Admin Login
> Email: `admin@mail.com`
> Password: `password`

## Final Step:

After the login you need to hit below url.Then go back to your main domain.

`https://yourdomain.com/storage-link`
`Go to https://yourdomain.com`
![Step 18](/docs/schooling/s22.png)
![Step 18](/docs/schooling/s23.png)

