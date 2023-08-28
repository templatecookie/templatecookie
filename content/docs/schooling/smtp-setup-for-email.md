---
title: SMTP Setup
position: 3
category: Getting Started
---

### What is SMTP?

According to [Wikipedia](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)

> The Simple Mail Transfer Protocol is an internet standard communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages.

Across the entire application, We have created many email templates like Account Verification email, Job Post Approval, Candidate Applied, and many more!

To send all the necessary emails, we need an Email Delivery service. Jobpilot uses SMTP for sending emails. Some of the popular SMTP Email Delivery Companies

1. Amazon SES
2. Mailtrap
3. Mailgun
4. Postmark
5. Sendmail
6. Sengrid

**In short, it is used to send emails to your site users..!! You can use any email delivery platform as long as it supports SMTP.**

### How to Enable?

- To enable, Go to `Settings` -> `Mail`
- Add the SMTP details and hit `Update`!

You can test the configuration by sending a test email from the same page. Also, you can use this tool to <a href="https://www.gmass.co/smtp-test" target="_blank"> test your SMTP credentials </a>

### Or use .env file

Or use `/.env` file to update the SMTP credentials

- Login to your FTP account.
- Open and Edit the `.env` file.
- Copy and paste your server SMTP details into the file.

It will look something like this.

```
    MAIL_MAILER=smtp
    MAIL_HOST=your-mail-host
    MAIL_PORT=your-mail-port
    MAIL_USERNAME=your-mail-username
    MAIL_PASSWORD=your-mail-password
    MAIL_ENCRYPTION=your-mail-encryption
```

### 1. How to get Amazon SES SMTP Credentials?

1. Create to your AWS account. (<a href="https://portal.aws.amazon.com/billing/signup#/start/email">Create Account</a>)
2. Go to `Services` -> `Simple Email Service`
3. Click on `SMTP Settings` from the left sidebar.
4. Click on `Create My SMTP Credentials` button.
5. Choose a username and click on `Create` button.
6. Copy the SMTP Credentials and paste it in your `.env` file or `Admin Panel` -> `Settings` -> `SMTP`.

### 2. How to get Mailtrap SMTP Credentials?

1. Create to your Mailtrap account. (<a href="https://mailtrap.io/register/signup">Create Account</a>)
2. Go to `SMTP Settings` from the left sidebar.
3. Copy the SMTP Credentials and paste it in your `.env` file or `Admin Panel` -> `Settings` -> `SMTP`.

### 3. How to get Mailgun SMTP Credentials?

1. Create to your Mailgun account. (<a href="https://signup.mailgun.com/new/signup">Create Account</a>)
2. Go to `Sending` -> `Domain`
3. Click on `Manage SMTP Credentials` button.
4. Choose a username and click on `Create` button.
5. Copy the SMTP Credentials and paste it in your `.env` file or `Admin Panel` -> `Settings` -> `SMTP`.

### 4. How to get Postmark SMTP Credentials?

1. Create to your Postmark account. (<a href="https://account.postmarkapp.com/sign_up">Create Account</a>)
2. Go to `Settings` -> `Credentials`
3. Click on `Generate SMTP Credentials` button.
4. Choose a username and click on `Create` button.
5. Copy the SMTP Credentials and paste it in your `.env` file or `Admin Panel` -> `Settings` -> `SMTP`.

### 5. How to get Sendmail SMTP Credentials?

1. Create to your Sendmail account. (<a href="https://www.sendinblue.com/">Create Account</a>)
2. Go to `SMTP & API` -> `SMTP`
3. Click on `Create a SMTP account` button.
4. Choose a username and click on `Create` button.
5. Copy the SMTP Credentials and paste it in your `.env` file or `Admin Panel` -> `Settings` -> `SMTP`.

### 6. How to get Sendgrid SMTP Credentials?

1. Create to your Sendgrid account. (<a href="https://signup.sendgrid.com/">Create Account</a>)
2. Go to `Settings` -> `API Keys`
3. Click on `Create API Key` button.
4. Choose a username and click on `Create & View` button.
5. Copy the SMTP Credentials and paste it in your `.env` file or `Admin Panel` -> `Settings` -> `SMTP`.

**Please note that some hosting providers blocks port 25 or 465 in that case you have to change your SMTP email server or contact your hosting provider**

NOTE: The `/.env` file settings override those of the admin panel.

**Note:** Don't forget to change your sender email address in your `SMTP Settings` page -> `Mail From Address` to match it with an allowed email address of your SMTP server.
