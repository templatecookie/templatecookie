---
title: Installation
description: Installation documentation
position: 11
category: "Getting Started"
---

# Installation

### Server Requirements

Before you install **Adlisting** make sure your server meets the following requirements:

- Server Type: Linux (Shared Hosting or VPS or Dedicated Server)
- PHP >= 8.1
- MariaDB 10.3+ or MySQL 5.7+ or PostgreSQL 10.0+
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

---

<h3 class=""> Hosting Recommendation </h3>

We recommend you set up this application on a cloud server. A cloud server is great for SPA, in terms of speed, security, and scalability.

We recommend
<a href="http://go.templatecookie.com/cloudways" target="_blank">Cloudways</a>, <a href="http://go.templatecookie.com/vultr" target="_blank">Vultr</a>, <a href="http://go.templatecookie.com/digitalocean" target="_blank">Digitalocean</a>, and <a href="http://go.templatecookie.com/namecheap" target="_blank"> Namecheap </a>

<div class="bg-gray-200 rounded-xl px-4 py-6">
  <section id="installation-services">
      <h2>Installation Services</h2>
      <p>We offer quality installation services at a low cost if you do not want to bother with the installation process.</p>
      <nuxt-link class="outline-btn" to="/installation-plans">View our Installation Plans</nuxt-link>
  </section>
</div>

### Step 1: Upload your files

Log in to your shared hosting and go to file manager. To upload files go to the `public_html` Folder and start uploading. Click on `Select File` and choose app.zip file. Please wait for the completion and close the tab once it is finished. Then reload the file manager and extract the file following the screenshot.

![Adlisting Installation Step 2](/docs/adlisting/install/s2.png)
![Adlisting Installation Step 3](/docs/adlisting/install/s3.png)
![Adlisting Installation Step 4](/docs/adlisting/install/s4.png)
![Adlisting Installation Step 5](/docs/adlisting/install/s5.png)
![Adlisting Installation Step 5_2](/docs/adlisting/install/s5_2.png)

### Step 2: Set the folder permissions

The application requires `775` permission to work properly. Set up 775 permission on these 3 folders.

- `bootstrap/cache`
- `storage/framework`
- `storage/logs`

![Adlisting Installation Step 7](/docs/adlisting/install/s7.png)
![Adlisting Installation Step 8](/docs/adlisting/install/s8.png)
![Adlisting Installation Step 9](/docs/adlisting/install/s9.png)

### Step 3: Create a Database

We need a database for the next step. Let's create a database by clicking on the `MYSQL Database Wizard` from your hosting panel. Once the database is created assign all database permission
Follow the screenshots for step by step process.

![Adlisting Installation Step 11](/docs/adlisting/install/s11.png)
![Adlisting Installation Step 12](/docs/adlisting/install/s12.png)
![Adlisting Installation Step 13](/docs/adlisting/install/s13.png)
![Adlisting Installation Step 14](/docs/adlisting/install/s14.png)

### Step 4: Import the database

We are going to import the demo database from Cpanel open `phpmyadmin` app. Then select your database and click on import. Choose the backup database from your computer and click on the "Go" Button.

![Adlisting Installation Step 18](/docs/adlisting/install/s18.png)
![Adlisting Installation Step 19](/docs/adlisting/install/s19.png)

### Step 5: Set DB Credentials on `.env` File

Now we need to set up database credentials in our app config. Go to your application folder and follow the screenshot.

![Adlisting Installation Step 15](/docs/adlisting/install/s15.png)
![Adlisting Installation Step 16](/docs/adlisting/install/s16.png)

### Congratulations

Carefully, Set the necessary details marked in the screenshot. Congratulations 🎉🎉🎉 You have installed the application successfully. Go to your domain and view the app.

`Notice: You must fill in the red mark field.`

![Adlisting Installation Step 17](/docs/adlisting/install/s17.png)
![Adlisting Installation Step 20](/docs/adlisting/install/s20.png)

### Admin Login Credentials

Wait a Minute! Use the credentials listed below to log in to the admin area.

**URL:** [https://yoururl.com/admin/](https://yoururl.com/admin/)

**Email:** `admin@mail.com`

**Password:** `password`
