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
