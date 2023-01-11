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

Get your Paypal API's from the [Paypal Developer Dashboard](https://developer.paypal.com/developer/applications). Here is a official documentation on how to [get Paypal API keys](https://developer.paypal.com/home/)

- Visit  [https://developer.paypal.com/developer/applications](https://developer.paypal.com/developer/applications)
- Generating a REST API app and get `Client ID` and `Client Secret` from there

```
    PAYPAL_MODE=sandbox
    PAYPAL_CLIENT_ID=your-paypal-client-id
    PAYPAL_CLIENT_SECRET=your-paypal-client-secret
```
*Note: You have to use `PAYPAL_MODE=live` in your live server.*

### STRIPE Setup
Get your Stripe API's from the [dashboard](https://dashboard.stripe.com/). Here is a official documentation on how to [get Stripe API's](https://stripe.com/docs/keys)

- Visit  [https://dashboard.stripe.com/](https://dashboard.stripe.com/)
- Get client ID and client secret from there

```
    STRIPE_KEY=your-stripe-client-id
    STRIPE_SECRET=your-stripe-client-secret
```

### RAZORPAY Setup
Get your Razorpay API's from the [Razorpay Dashboard](https://razorpay.com/). Here is a official documentation on how to [get Razorpay API's](https://razorpay.com/docs/api/)

- Visit  [https://razorpay.com/docs/api/](https://razorpay.com/docs/api/)
- Get client ID and client secret from there


```
    RAZORPAY_KEY=your-razorpay-client-id
    RAZORPAY_SECRET=your-razorpay-client-secret
```

### Paystack Setup
Get your Paystack API's from the [Paystack Dashboard](https://paystack.com). Here is a official documentation on how to [get Paystack API's](https://paystack.zendesk.com/hc/en-us/articles/360011508199-How-do-I-generate-new-API-keys)

- Visit  [https://paystack.com](https://paystack.com)
- Get client ID and client secret from there


```
    PAYSTACK_PUBLIC_KEY=your-paystack-client-id/public-key
    PAYSTACK_SECRET_KEY=your-paystack-client-secret/secret-key
    MERCHANT_EMAIL=your-paystack-merchant-email
```
### Update API Keys Using Admin Panel

- Go to the **Admin panel** -> **Settings** -> **System Setting** -> **Payment Gateway** -> **Auto Payment**
- Enable the payment gateway by turning on '**Status**'
- Set '**CLIENT ID**' and '**CLIENT SECRET**'
- And save your changes.

### Update API Keys Using .env file
You can use `.env` file for setup as well. Follow the steps below and update your payment gateway keys

- Login to your FTP account
- Open `/.env` file.
- Provide the keys there and hit update

**Note: Set Status field as true. Example `PAYPAL_ACTIVE=false`**
