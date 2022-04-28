---
title: Developer Guide
description: Installation documentation
position: 6
category: Others
---

## Developer Guide

Development & Contribution guide for Developers looking to customize Hasaal for their own projects.

## Installation

1.  Unzip the zip file you have downloaded and extract it.
2.  Install composer to your system and run `composer install` inside your cloned folder to install all laravel/php dependencies.
3.  Create an `.env` file by running the following command: `cp .env.example .env`. Or alternately you can just copy `.env.example` file to the same folder and re-name it to `.env`.
4.  run command: `php artisan key:generate` to generate a unique application key.
5.  Open the link to the domain in the browser (Example: [http://localhost:8000](http://localhost:8000)) and complete the installation wizard as directed.
