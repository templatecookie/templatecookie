---
title: Installation
description: Installation documentation
position: 2
category: Getting Started
---

# Installation

### Server Requirements

Before you install **Hasaal** make sure your server meets the following requirements:

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

How To Setup In Liveserver (CPanel)

---

---

#### Setup Laravel on Cpanel:

If you want to host laravel application on shared hosting, you can headover to this article or watch the video above. [Setup laravel on Shared Hosting](https://medium.com/backenders-club/how-to-host-a-laravel-project-on-a-shared-hosting-via-cpanel-d955d32c528e)

#### Setup on Laravel on Cloud?

If you want to host laravel application on cloud, you can headover to this article. [Setup laravel on Cloud](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-laravel-with-nginx-on-ubuntu-20-04)

#### Watch the installation video instead

---

#### Step 1:

Login to your shared hosting and go to file manager.

---

![](assets/images/install/s1.png)

#### Step 2:

go to `public_html` Folder and click on upload button.

---

![](assets/images/install/s2.png)

#### Step 3:

click on "Select File" and choose hasaal.zip file.

---

![](assets/images/install/s3.png)

#### Step 4:

Wait for the completation and close the tab once it is finished.

---

![](assets/images/install/s4.png)

#### Step 5:

Reload the file manager and extract the file following the screenshot.

---

![](assets/images/install/s5.png) ![](assets/images/install/s5_2.png)

#### Step 6:

We need to setup 775 permission on these 3 folders. Let's do this

- `bootstrap/cache`
- `storage/framework`
- `storage/logs`

---

#### Step 7:

Select the storage folder and follow the screenshot.

---

![](assets/images/install/s7.png)

#### Step 8:

Go to bootstrap folder & select cache folder and folow the same process.

---

![](assets/images/install/s8.png)

#### Step 9:

Got to the storage folder and follow the same process as below.

---

![](assets/images/install/s9.png)

#### Step 10:

We need a database for the next step. Let's create a database by clicking on "MYSQL Database Wizard" form shared hosting.

---

![](assets/images/install/s11.png)

#### Step 11:

Enter the database and click `Next Step`.

---

![](assets/images/install/s12.png)

#### Step 12:

Enter the database user name & password. Click on `Create User`.

---

![](assets/images/install/s13.png)

#### Step 13:

Save database name and database user name. Select All Permission and Click on `Next Step`.

---

![](assets/images/install/s14.png)

#### Step 14:

We are going to import demo database. From cpanel open `phpmyadmin` app. Then select your database and click on import.

---

![](assets/images/install/s18.png)

#### Step 15:

Choose the backup database from your computer and click on "Go" Button.

---

![](assets/images/install/s19.png) ![](assets/images/install/s20.png)

#### Step 16:

Now we need to setup database credentails in our app config. Go to your application folder and follow the screenshot.

---

![](assets/images/install/s15.png) ![](assets/images/install/s16.png)

#### Step 17:

Carefully, Set necessery details marked in the screenshot. .

---

![](assets/images/install/s17.png)

# Attention!

To avoid error, Please set the `SESSION_DOMAIN` & `SANCTUM_STATEFUL_DOMAINS` property value properly by following the example below!

![](assets/images/localserver-demo.png) ![](assets/images/domain-demo.png)

#### Step 18:

Congratulations 🎉🎉🎉 You have installed the application successfully. Go to your domain and view the app. You can use the demo credentails to login

---

![](assets/images/install/s21.png)

#### Wait a Minute!

Use the credentials listed below to login to the app.

# User Accounts

Admin Login

**Email:** `admin@mail.com`

**Password:** `password`

# Recommendation

# Hosting Recommendation

We recommend you to setup this application on cloud server. Cloud server is great for SPA, in terms of speed, security and scalibitly.

We recommend Digitalocean, Vultr, Linode and AWS

- [Bluehost Shared Hosting](https://www.bluehost.com/track/webzakir/)
- [Digitalocean Cloud Hosting](https://m.do.co/c/44ed55706f71)
