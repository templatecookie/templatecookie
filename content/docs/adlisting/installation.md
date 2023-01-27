---
title: Installation
description: Installation documentation
position: 2
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

<hightlight-block>
<template>
  <h3 class="!text-white"> Hosting Recommendation </h3>

  We recommend you set up this application on a cloud server. A cloud server is great for SPA, in terms of speed, security, and scalability.

  We recommend 
  <a href="http://go.templatecookie.com/cloudways" target="_blank">Cloudways</a>, <a href="http://go.templatecookie.com/vultr" target="_blank">Vultr</a>, <a href="http://go.templatecookie.com/digitalocean" target="_blank">Digitalocean</a>, and <a href="http://go.templatecookie.com/namecheap" target="_blank"> Namecheap </a>
</template>
</hightlight-block>


<div class="bg-gray-200 rounded-xl px-4 py-6">
  <section id="installation-services">
      <h2>Installation Services</h2>
      <p>If you prefer not to deal with installation setup, we provide professional installation services at a reasonable price.</p>
      <div id="product-installation">
          <h3>Product Installation - $35</h3>
          <p>The product installation package includes the following:</p>
          <ul>
              <li>Uploading the product files on your server (requires a fully configured and ready to go server).</li>
              <li>Creating and configuring the database that is going to be used.</li>
              <li>Full installation of the <strong>product</strong>.</li>
          </ul>
          <small class="text-muted">You must own a server with a control panel like Plesk, cPanel...etc.</small>
      </div>
      <div id="full-installation">
          <h3>Full Server Installation - $45</h3>
          <p>The full server installation package includes the following:</p>
          <ul>
              <li>Setting up a new server (Ubuntu OS) on one of those platforms: <a href="http://go.templatecookie.com/cloudways" target="_blank">Cloudways</a>, <a href="http://go.templatecookie.com/vultr" target="_blank">Vultr</a>, <a href="http://go.templatecookie.com/digitalocean" target="_blank">DigitalOcean</a></li>
              <li>Setting up the domain for the server</li>
              <li>Free SSL Certificate Installation (Let's Encrypt)</li>
              <li>Installation of Nginx, MySQL with MySQLi, PHP</li>
              <li>Installation and configuration of PHP's necessary modules / extensions</li>
              <li>Full installation of the <strong>product</strong></li>
          </ul>
      </div>
      <nuxt-link class="outline-btn" to="/get-support">Create a installation support ticket</nuxt-link>
  </section>
</div>

### Step 1: Upload your files

Log in to your shared hosting and go to file manager. To upload files go to the `public_html` Folder and start uploading. Click on `Select File` and choose app.zip file. Please wait for the completion and close the tab once it is finished. Then reload the file manager and extract the file following the screenshot.


![](/docs/adlisting/install/s2.png)
![](/docs/adlisting/install/s3.png)
![](/docs/adlisting/install/s4.png)
![](/docs/adlisting/install/s5.png) 
![](/docs/adlisting/install/s5_2.png)

### Step 2: Set the folder permissions

The application requires `775` permission to work properly. Set up 775 permission on these 3 folders. 

- `bootstrap/cache`
- `storage/framework`
- `storage/logs`

![](/docs/adlisting/install/s7.png)
![](/docs/adlisting/install/s8.png)
![](/docs/adlisting/install/s9.png)


### Step 3: Create a Database

We need a database for the next step. Let's create a database by clicking on the `MYSQL Database Wizard` from your hosting panel. Once the database is created assign all database permission 
Follow the screenshots for step by step process. 

![](/docs/adlisting/install/s11.png)
![](/docs/adlisting/install/s12.png)
![](/docs/adlisting/install/s13.png)
![](/docs/adlisting/install/s14.png)

### Step 4: Import the database

We are going to import the demo database from Cpanel open `phpmyadmin` app. Then select your database and click on import. Choose the backup database from your computer and click on the "Go" Button.

![](/docs/adlisting/install/s18.png)
![](/docs/adlisting/install/s19.png)

### Step 5: Set DB Credentials on `.env` File

Now we need to set up database credentials in our app config. Go to your application folder and follow the screenshot.

![](/docs/adlisting/install/s15.png) 
![](/docs/adlisting/install/s16.png)

### Congratulations

Carefully, Set the necessary details marked in the screenshot. Congratulations 🎉🎉🎉 You have installed the application successfully. Go to your domain and view the app.

`Notice: You must fill in the red mark field.`

![](/docs/adlisting/install/s17.png) 
![](/docs/adlisting/install/s20.png)

### Admin Login Credentials

Wait a Minute! Use the credentials listed below to log in to the admin area.

**URL:** [https://yoururl.com/admin/](https://yoururl.com/admin/)

**Email:** `admin@mail.com`

**Password:** `password`
