---
title: SMTP Setup
position: 8
category: System Setting
---

## What is SMTP?
According to [Wikipedia](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
> The Simple Mail Transfer Protocol is an internet standard communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages.

Across the entire application, We have created many email template like Account Verification email, Job Post Approval, Candidate Applied and many more! 

To send all the necessary email, we need a Email Delivery servcies. Jobpilot uses SMTP for sending emails. Some of the popular SMTP Email Delivery Company

1. Mailgun
2. Postmark
3. Amazon SES
4. Sendmail
5. Sengrid

Although, you can use any email delivery platform as long as it supports SMTP. 

### How to Enable?
- To enable each payment gateway, Go to `Settings` -> `SMTP`

Add the smtp details and hit `Update`! You can test the configuration by sending a test email from the same page. 


SMTP
----

**What is SMTP ?**  

Short for Simple Mail Transfer Protocol, a protocol for sending e-mail messages between servers. Most e-mail systems that send mail over the Internet use SMTP to send messages from one server to another; the messages can then be retrieved with an e-mail client using either POP or IMAP. In addition, SMTP is generally used to send messages from a mail client to a mail server. This is why you need to specify both the POP or IMAP server and the SMTP server when you configure your e-mail application.

**In short it used to send emails to your site users..!!** You can use any SMTP service provider.

*   Your own hosting SMTP server
*   Mailgun
*   Postmark
*   Amazon SES
*   Sparkpost
*   Gmail, Yahoo or some other email provider

**Please note that some hosting providers blocks port 25 or 465 in that case you have change your SMTP email server or contact your hosting provider**

### Own SMTP Server

**Using your own or some SMTP server** **Admin panel setup**

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Mail**
*   Set '**Mail Mailer**', '**Mail Host**', '**Mail Port**', '**Mail Encryption**', '**Mail Username**' and '**Mail Password**'
*   And save your changes.

**Or use `/.env` file setup**

*   Login to your FTP account.
*   Open and Edit `/.env` file.
*   Copy and paste your server smtp details in the file.

It will look something like this.
```
    MAIL_MAILER=smtp
    MAIL_HOST=your-mail-host
    MAIL_PORT=your-mail-port
    MAIL_USERNAME=your-mail-username
    MAIL_PASSWORD=your-mail-password
    MAIL_ENCRYPTION=your-mail-encryption
```

*   Replace `your-mail-host`, `your-mail-port`, `your-mail-username`, `your-mail-password` and `your-mail-encryption`.
*   Save and Upload the file
*   You are done.

NOTE: The `/.env` file settings override those of the admin panel.


**Note:** Don't forget to change your sender email address in your **Admin panel** -> **Settings** -> **General** -> **Mail** -> **Email Sender** to match it with an allowed email address of your SMTP server.

### Mailgun

**Admin panel setup**

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Mail**
*   Set '**Mail Mailer**', '**Mailgun Domain**', '**Mailgun Secret**', '**Mail Host**', '**Mail Port**', '**Mail Encryption**', '**Mail Username**' and '**Mail Password**'
*   And save your changes.

**Or use `/.env` file setup**

*   Login to your FTP account.
*   Open and edit `/.env` file.
*   Remove all your current Mail configuration variables.
*   Add the lines below:
```
    MAIL_MAILER=mailgun
    MAILGUN_DOMAIN=your-mailgun-domain
    MAILGUN_SECRET=your-mailgun-secret
    MAILGUN_ENDPOINT=api.mailgun.net
    MAIL_HOST=your-mailgun-smtp-host
    MAIL_PORT=your-mailgun-smtp-port
    MAIL_USERNAME=your-mailgun-smtp-username
    MAIL_PASSWORD=your-mailgun-smtp-password
    MAIL_ENCRYPTION=your-mailgun-smtp-encryption
```

*   Replace `your-mailgun-domain`, `your-mailgun-secret`, `your-mailgun-smtp-host`, `your-mailgun-smtp-port`, `your-mailgun-smtp-username`, `your-mailgun-smtp-password` and `your-mailgun-smtp-encryption`.
*   Save and upload the file.
*   You are done.

NOTE: The `/.env` file settings override those of the admin panel.

**Note:** Don't forget to change your sender email address in your **Admin panel** -> **Settings** -> **General** -> **Mail** -> **Email Sender** to match it with an allowed email address of your SMTP server.

### Postmark

**Admin panel setup**

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Mail**
*   Set '**Mail Mailer**', '**Postmark Token**', '**Mail Host**', '**Mail Port**', '**Mail Encryption**', '**Mail Username**' and '**Mail Password**'
*   And save your changes.

**Or use `/.env` file setup**

*   Login to your FTP account.
*   Open and edit `/.env` file.
*   Remove all your current Mail configuration variables.
*   Add the lines below:
```
    MAIL_MAILER=postmark
    POSTMARK_TOKEN=your-postmark-token
    MAIL_HOST=your-postmark-smtp-host
    MAIL_PORT=your-postmark-smtp-port
    MAIL_USERNAME=your-postmark-smtp-username
    MAIL_PASSWORD=your-postmark-smtp-password
    MAIL_ENCRYPTION=your-postmark-smtp-encryption
```

*   Replace `your-postmark-secret`, `your-postmark-smtp-host`, `your-postmark-smtp-port`, `your-postmark-smtp-username`, `your-postmark-smtp-password` and `your-postmark-smtp-encryption`.
*   Save and upload the file.
*   You are done.

NOTE: The `/.env` file settings override those of the admin panel.

**Note:** Don't forget to change your sender email address in your **Admin panel** -> **Settings** -> **General** -> **Mail** -> **Email Sender** to match it with an allowed email address of your SMTP server.

### Amazon SES

**Admin panel setup**

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Mail**
*   Set '**Mail Mailer**', '**SES Key**', '**SES Secret**' and '**SES Region**'
*   And save your changes.

**Or use `/.env` file setup**

*   Login to your FTP account.
*   Open and edit `/.env` file.
*   Remove all your current Mail configuration variables.
*   Add the lines below:
```
    MAIL_MAILER=ses
    SES_KEY=your-ses-key
    SES_SECRET=your-ses-secret
    SES_REGION=your-ses-region
```
*   Replace `your-ses-key`, `your-ses-secret` and `your-ses-region`.
*   Save and upload the file.
*   You are done.

NOTE: The `/.env` file settings override those of the admin panel.

**Note:** Don't forget to change your sender email address in your **Admin panel** -> **Settings** -> **General** -> **Mail** -> **Email Sender** to match it with an allowed email address of your SMTP server.

### Sparkpost

**Admin panel setup**

*   Go to your **Admin panel** -> **Settings** -> **General** -> **Mail**
*   Set '**Mail Mailer**', '**Sparkpost Secret**', '**Mail Host**', '**Mail Port**', '**Mail Encryption**', '**Mail Username**' and '**Mail Password**'
*   And save your changes.

**Or use `/.env` file setup**

*   Login to your FTP account.
*   Open and edit `/.env` file.
*   Remove all your current Mail configuration variables.
*   Add the lines below:
```
    MAIL_MAILER=sparkpost
    SPARKPOST_SECRET=your-sparkpost-secret
    MAIL_HOST=your-sparkpost-smtp-host
    MAIL_PORT=your-sparkpost-smtp-port
    MAIL_USERNAME=your-sparkpost-smtp-username
    MAIL_PASSWORD=your-sparkpost-smtp-password
    MAIL_ENCRYPTION=your-sparkpost-smtp-encryption
```
*   Replace `your-sparkpost-secret`, `your-sparkpost-smtp-host`, `your-sparkpost-smtp-port`, `your-sparkpost-smtp-username`, `your-sparkpost-smtp-password` and `your-sparkpost-smtp-encryption`.
*   Save and upload the file.
*   You are done.

NOTE: The `/.env` file settings override those of the admin panel.

**Note:** Don't forget to change your sender email address in your **Admin panel** -> **Settings** -> **General** -> **Mail** -> **Email Sender** to match it with an allowed email address of your SMTP server.
