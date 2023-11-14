---
title: Local Installation
description: Installation documentation
position: 2
category: Getting Started
---

<!--more-->

# Installation

### Local Server Requirements

Before you install **Jobpilot** make sure your server meets the following requirements:

- PHP >= 8.1
- MariaDB 10.3+ or MySQL 5.7+ or PostgreSQL 10.0+
- Apache or Nginx
- Composer 2.0+
- Node.js 16.0+
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

Before you move forward, please ensure local server requirements are met. 👆

### Step 1: Extract the application

Extract the application archive you downloaded from CodeCanyon to a folder on your computer. You should see the following files and folders:

```bash 
app.zip
app.sql
docs.txt
upgrade_guide.txt
``` 

Now extract the `app.zip` file.

### Step 2: Create a database

Create a new database on your local server to hold the application data. You can use any database management tool such as phpMyAdmin, Adminer, etc. to create the database. 

### Step 3: Import the database

Import the `app.sql` file into the database you created in the previous step. You can use any database management tool such as phpMyAdmin, Adminer, etc. to import the database.

If you are using phpMyAdmin, follow the steps below:

We are going to import the demo database from Cpanel open `phpmyadmin` app. Then select your database and click on import. Choose the database from your computer and click on the "Go" Button.

![Schooling Installation Process 14](/docs/jobpilot/install/s18.png)
![Schooling Installation Process 15](/docs/jobpilot/install/s19.png)

### Step 4: Configure the application

Go to the application folder and open the `.env` file in a text editor. Set the database credentials and other necessary details in the file. 

```bash
APP_NAME="Jobpilot - Jobportal Laravel"
APP_URL=http://127.0.0.1:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=chosen_database_name
DB_USERNAME=root
DB_PASSWORD=password
```

### Step 5: Install the application

Open a terminal and navigate to the application folder. Then run the following commands:

```bash
php artisan serve
```

Now open your browser and go to the URL `http://127.0.0.1:8000`
