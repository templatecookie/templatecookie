---
title: Developer Guide
description: Installation documentation
position: 6
category: Others
---

## Developer Guide

Development & Contribution guide for Developers looking to customize Schooling for their own projects.

## Installation

- Unzip the zip file you have downloaded and extract it.
- Install Yarn globally if you haven't installed that already , for more information please refer this link(opens new window)
- After installing Yarn globally , run `yarn` command inside your cloned folder, it will download all the required dependencies.
- Run `yarn dev` to generate the public files (do `yarn production` if you wish to use it on production).
- Install composer to your system and run `composer install` inside your cloned folder to install all laravel/php dependencies.
- Create an `.env` file by running the following command: `cp .env.example .env`. Or alternately you can just copy `.env.example` file to the same folder and re-name it to `.env`.
- run command: `php artisan key:generate` to generate a unique application key.
- Open the link to the domain in the browser (Example: `http://localhost:8000`) and complete the installation wizard as directed.

## Source & Credits

Here are the list of tools and framework we used in this application.

- [Tabler](https://preview.tabler.io) (Admin Dashboard Template)
- [Laravel](https://github.com/laravel/laravel) (Most popular PHP framework)
- [Vue.js](https://github.com/vuejs/vue) (Progressive Javascript Framework)
- [Vuex](https://vuex.vuejs.org) - State Management
- [Vue Router](https://router.vuejs.org) - SPA Routing
- [Axios](https://github.com/axios/axios) - Promise based HTTP client
- Laravel Permission (Spatie) Package and Much more
