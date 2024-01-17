---
title: Setup Payment Gateway
position: 5
category: Configuration
---

# Payment Setting

To activate payment gateway on your website and receive payment from the customers, You have enable payment gateway's by using API's Keys! Here is where to get them.

Currently Schooling supports 4 payment gateways.

1. Paypal
2. Stripe
3. Flutterwave
4. Razorpay
5. Midtrans

> Attention, you need API keys for every payment provider, which you need to retrieve from your payment gateway provider. Contact your payment gateway's support for any help.

### How to enable?

- To enable each payment gateway, Go to `Admin Panel` -> `Settings` -> `Payment`

Enable the payment provider by clicking on the switch, Entering the `API` keys, and hitting update! Congratulations 🎉

### Paypal Setup

The PayPal integration gives your users the ability to pay via PayPal on your website.

- Go to PayPal Developer Console and Login to your account after clicking the Log into Dashboard button
- Go to REST API apps section and click the Create App button.
- Add your own details for the new app and create it.
- Switch to Live by clicking the button near your new App's Name.
- Copy the Client ID and Secret
- Go to your product Admin Panel -> Settings -> Payment -> Paypal Tab and enter the Client ID and Secret keys.
- Make sure to also switch the Mode to Live and Submit the new settings.

### STRIPE Setup

The PayPal integration gives your users the ability to pay via Stripe on your website.

- Go to Stripe Dashboard and Login to your account.
- Go to Stripe API Keys page.
- Make sure your API keys are set to Live Mode so that you can accept real payments.
- Copy the Publishable key and Secret key.
- Go to your product Admin Panel -> Settings -> Payment -> Stripe Tab and enter the Publishable key and Secret Key.

### RAZORPAY Setup

The Razorpay integration gives your users the ability to pay with via the Razorpay payment gateway for purchases.

- Go to Razorpay and Login to your account.
- Go to the Settings page -> API Keys tab on Razorpay & generate your API keys.
- Go to your product installation Admin Panel -> Settings -> Payment -> Razorpay Tab and enter the given API Keys.

### Flutterwave Setup

The Flutterwave integration gives your users the ability to pay with via the Flutterwave payment gateway for purchases.

- Go to [Flutterwave](https://flutterwave.com/us/) and Login to your account.
- Go to Settings -> API Keys page on Flutterwave get your API key.
- Go to your product Admin Panel -> Settings -> Payment Gateway -> Manual Payment -> Flutterwave and enter the given API Key.

### Midtrans Setup

The Midtrans integration gives your users the ability to pay with via the Midtrans payment gateway for purchases.

- Go to [Midtrans](https://midtrans.com/id) and Login to your account.
- Go to Settings -> Access Keys page on Midtrans get your API key.
- Go to your product Admin Panel -> Settings -> Payment Gateway -> Manual Payment -> Midtrans and enter the given API Key.
