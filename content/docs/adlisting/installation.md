---
title: Installation
description: Installation documentation
position: 2
category: "Getting Started"
---

# Installation

### Server Requirements

Before you install **Adlisting** make sure your server meets the following requirements:

- Server Type: Linux (Shared / VPS / Dedicated)
- PHP >= 8.1
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

<call-out-block type="info">
<template>

### Setup Laravel on Cpanel:

If you want to host laravel application on shared hosting, you can headover to this article or watch the video above. [Setup laravel on Shared Hosting](https://medium.com/backenders-club/how-to-host-a-laravel-project-on-a-shared-hosting-via-cpanel-d955d32c528e)
</template>
</call-out-block>

<call-out-block type="success">
<template>

### Setup on Laravel on Cloud?

If you want to host laravel application on cloud, you can headover to this article. [Setup laravel on Cloud](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-laravel-with-nginx-on-ubuntu-20-04)
</template>
</call-out-block>

---

### Step 1:

Login to your shared hosting and go to file manager.

---

![](/docs/adlisting/install/s1.png)

### Step 2:

go to `public_html` Folder and click on upload button.

---

![](/docs/adlisting/install/s2.png)

### Step 3:

click on "Select File" and choose app.zip file.

---

![](/docs/adlisting/install/s3.png)

### Step 4:

Wait for the completation and close the tab once it is finished.

---

![](/docs/adlisting/install/s4.png)

### Step 5:

Reload the file manager and extract the file following the screenshot.

---

![](/docs/adlisting/install/s5.png) ![](/docs/adlisting/install/s5_2.png)

### Step 6:

We need to setup 775 permission on these 3 folders. Let's do this

- `bootstrap/cache`
- `storage/framework`
- `storage/logs`

---

### Step 7:

Select the storage folder and follow the screenshot.

---

![](/docs/adlisting/install/s7.png)

### Step 8:

Go to bootstrap folder & select cache folder and folow the same process.

---

![](/docs/adlisting/install/s8.png)

### Step 9:

Got to the storage folder and follow the same process as below.

---

![](/docs/adlisting/install/s9.png)

### Step 10:

We need a database for the next step. Let's create a database by clicking on "MYSQL Database Wizard" form shared hosting.

---

![](/docs/adlisting/install/s11.png)

### Step 11:

Enter the database and click `Next Step`.

---

![](/docs/adlisting/install/s12.png)

### Step 12:

Enter the database user name & password. Click on `Create User`.

---

![](/docs/adlisting/install/s13.png)

### Step 13:

Save database name and database user name. Select All Permission and Click on `Next Step`.

---

![](/docs/adlisting/install/s14.png)

### Step 14:

We are going to import demo database. From cpanel open `phpmyadmin` app. Then select your database and click on import.

---

![](/docs/adlisting/install/s18.png)

### Step 15:

Choose the backup database from your computer and click on "Go" Button.

---

![](/docs/adlisting/install/s19.png)

### Step 16:

Now we need to setup database credentails in our app config. Go to your application folder and follow the screenshot.

---

![](/docs/adlisting/install/s15.png) ![](/docs/adlisting/install/s16.png)

### Step 17:

Carefully, Set necessery details marked in the screenshot. .

`Notice: You must fill the red mark field.` .

---

![](/docs/adlisting/install/s17.png) ![](/docs/adlisting/install/s20.png)

### Step 18:

Congratulations 🎉🎉🎉 You have installed the application successfully. Go to your domain and view the app.

---

#### Wait a Minute!

Use the credentials listed below to login to the app.

# Account Credentials

Admin Login

**URL:** [https://yoururl.com/admin](https://yoururl.com/admin)

**Email:** `admin@mail.com`

**Password:** `password`

<hightlight-block>
<template>

# Hosting Recommendation

We recommend you to setup this application on cloud server. Cloud server is great for SPA, in terms of speed, security and scalibitly.

We recommend Digitalocean, Vultr, Linode and AWS

[Bluehost Shared Hosting](https://www.bluehost.com/track/webzakir/)
[Digitalocean Cloud Hosting](http://go.templatecookie.com/digitalocean)

</template>
</hightlight-block>
