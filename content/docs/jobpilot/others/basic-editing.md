---
title: Basic Editing
description: Installation documentation
position: 40
category: Others
---

# Basic Editing
In this post, I will share with you how to perform basic editing.

### Requirements

---

You must have basic knowledge of HTML, CSS, PHP & Websites. If you don't have any knowledge, I would recommend not overwriting project files.

### Basics
Before we get started, let's take a look at the tools we need for editing.

- Code Editor (I recommend [VS Code Editor](https://code.visualstudio.com/) , but you can use any.)
- Browser (I recommend [Google Chrome](http://chrome.google.com) Any browser is ok)

### Files and Folder

---

Once You Install The Product on Your Server, You Will have Two Folder and Few Files. On Folder "backend" or "frontend", We keep all kind of asset like CSS, JS, Images. So if You Want To Edit Or Change Any Asset, Have a Look on This Folder.

On Folder "script", We keep The Core of Laravel.

We Maintain Laravel Structure(MVC) on This Project.

`routes/web.php & Modules/*/Routes/web.php` All Routes (URL) in This Folder. You can find the ControllerName@MethodName Here.

`app/models & Modules/*/Entities` All Models are in This Folder.

`app/Http/Controllers & Modules/*/Http/Controllers` All Controller are in This Folder. if you want need to change any functionality.

`resources/views & Modules/*/resources/views` if you want need to change anything on view file.

### Route File Edit

You will find all the route files under `routes/web.php & Modules/*/Routes/web.php` Folder. You can open any route file using VS code editor or any.

Application core routes located in route files. If you want to change something. You can do here.

![screenshot](/docs/jobpilot/screenshot/editcode/route.png)
![screenshot](/docs/jobpilot/screenshot/editcode/route2.png)


### Blade File Edit

You will find all the blade files under `resources/views` and `Modules/*/resources/views` Folder. You can open any file using VS code editor or any.

Application core views code located in blade files. If you want to change something. You can do here.

![screenshot](/docs/jobpilot/screenshot/editcode/blade.png)
![screenshot](/docs/jobpilot/screenshot/editcode/blade2.png)

<!-- 
### Controller File Edit

You will find all the controller files under `app/Http/Controllers` `Modules/*/Http/Controllers` Folder. You can open any controller using VS code editor or any.

![screenshot](/docs/jobpilot/screenshot/editcode/controller.png)
![screenshot](/docs/jobpilot/screenshot/editcode/controller2.png)


### Website Content Change

If you want to change website content like below then you can simply follow the steps.

You will find all the translated line under `resources/lang/en/website.php` Folder. You can open file using VS code editor or any then simply replace it.

![screenshot](/docs/jobpilot/screenshot/editcode/content.png)
![screenshot](/docs/jobpilot/screenshot/editcode/content2.png)

![screenshot](/docs/jobpilot/screenshot/editcode/content3.png) -->
