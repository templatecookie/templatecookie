---
title: Payment Gateway
position: 5
category: Getting Started
---

# Payment Setting
To activate payment gateway on your website and receive payment from the customers, You have enable payment gateway's by using API's Keys! Here is where to get them. 

Currently Jobpilot support 4 payment gateways.
1. Stripe
2. Paypal
3. Paystack
4. Razorpay
5. Flutterwave
5. SSl Commerz
5. Mollie
5. Midtrans
5. Instamojo


> Attention, you need API keys for every payment provider, which you need to retrieve from your payment gateway provider. Contact your payment gateway's support for any help.

### How to enable?
- To enable each payment gateway, Go to `Settings` -> `Payment Gateway`

Enable the payment provider by clicking on the switch, Entering the `API` keys, and hitting update! Congratulations 🎉

### Paypal Setup
The PayPal integration gives your users the ability to pay via PayPal on your website.

- Go to PayPal Developer Console and Login to your account after clicking the Log into Dashboard button
- Go to REST API apps section and click the Create App button.
- Add your own details for the new app and create it.
- Switch to Live by clicking the button near your new App's Name.
- Copy the Client ID and Secret
- Go to your product installation Admin Panel -> Website Settings -> Paypal Tab and enter the Client ID and Secret keys.
- Make sure to also switch the Mode to Live and Submit the new settings.
- Go to the newly created App in the Paypal Developer Console and click on the Add Webhook button.
- In the Webhook Url field, add your website's URL in this format: https://yourdomain.com/webhook-paypal (replace yourdomain.com with your own domain name).
- In the Event types field, check the Payment sale completed, Checkout order approved events and submit the Webhook.


### STRIPE Setup
The PayPal integration gives your users the ability to pay via Stripe on your website.

- Go to Stripe Dashboard and Login to your account.
- Go to Stripe API Keys page.
- Make sure your API keys are set to Live Mode so that you can accept real payments.
- Copy the Publishable key and Secret key.
- Go to your product installation Admin Panel -> Website Settings -> Stripe Tab and enter the Publishable key and Secret Key.
- From the sidebar, under Developers click on Webhooks link.
- Click on the Add endpoint button
- In the Endpoint URL field, add your website's URL in this format: https://yourdomain.com/webhook-stripe (replace yourdomain.com with your own domain name).
- In the Events to send field, select the checkout.session.completed, invoice.paid, invoice.upcoming and click the Add endpoint button.
- Copy the Signing secret key and paste it in the product's Webhook Secret field in the admin panel.


### RAZORPAY Setup
The Razorpay integration gives your users the ability to pay with via the Razorpay payment gateway for purchases.

- Go to Razorpay and Login to your account.
- Go to the Settings page -> API Keys tab on Razorpay & generate your API keys.
- Go to your product installation Admin Panel -> Website Settings -> Razorpay Tab and enter the given API Keys.
- Go to the Settings page on Razorpay & generate your API keys.
- Go to the Settings page -> Webhooks tab on Razorpay & Add a new Webhook.
- Add your website's URL in this format: https://yourdomain.com/webhook-razorpay (replace yourdomain.com with your own domain name).
- Add a new Secret (like a password) & check the subscription.charged and payment_link.paid & save the webhook.
Go to your product installation Admin Panel -> Website Settings -> Razorpay Tab and enter the set webhook secret.


### Paystack Setup
The Paystack integration gives your users the ability to pay with via the Paystack payment gateway for one time & recurring purchases.

- Go to Paystack and Login to your account.
- Go to the Settings page -> API Keys & Webhooks tab on Paystack.
- Go to your product installation Admin Panel -> Website Settings -> Paystack Tab and enter the given API Keys.
- Add your website's URL in this format: https://yourdomain.com/webhook-paystack (replace yourdomain.com with your own domain name) in the Webhook URL field & save the changes.

### Mollie Setup
The Mollie integration gives your users the ability to pay with via the Mollie payment gateway for purchases.

- Go to [Mollie](https://mollie.com/) and Login to your account.
- Go to the Developers -> API Keys page on Mollie get your API key.
- Go to your product installation Admin Panel -> Settings -> Payment Gateway -> Mollie and enter the given API Key.

