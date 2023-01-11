---
title: Setup SMTP Config
position: 20
category: How to Tutorial
---

### What is SMTP?
According to [Wikipedia](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
> The Simple Mail Transfer Protocol is an internet standard communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages.

Across the entire application, We have created many email templates like Account Verification email, Job Post Approval, Candidate Applied, and many more! 

To send all the necessary emails, we need an Email Delivery service. Jobpilot uses SMTP for sending emails. Some of the popular SMTP Email Delivery Companies

1. Mailgun
2. Postmark
3. Sendmail
4. Sengrid

**In short, it is used to send emails to your site users..!! You can use any email delivery platform as long as it supports SMTP.** 

### How to Enable?
- To enable, Go to `Settings` -> `SMTP`
- Add the SMTP details and hit `Update`!

 You can test the configuration by sending a test email from the same page. Also, you can use this tool to <a href="https://www.gmass.co/smtp-test" target="_blank"> test your SMTP credentials </a>

### Or use .env file
Or use `/.env` file to update the SMTP credentials

*   Login to your FTP account.
*   Open and Edit the `.env` file.
*   Copy and paste your server SMTP details into the file.

It will look something like this.
```
    MAIL_MAILER=smtp
    MAIL_HOST=your-mail-host
    MAIL_PORT=your-mail-port
    MAIL_USERNAME=your-mail-username
    MAIL_PASSWORD=your-mail-password
    MAIL_ENCRYPTION=your-mail-encryption
```


**Please note that some hosting providers blocks port 25 or 465 in that case you have to change your SMTP email server or contact your hosting provider**

NOTE: The `/.env` file settings override those of the admin panel.

**Note:** Don't forget to change your sender email address in your `SMTP Settings` page -> `Mail From Address` to match it with an allowed email address of your SMTP server.
