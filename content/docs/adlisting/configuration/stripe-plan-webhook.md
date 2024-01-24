---
title: Stripe Plan & Webhook
position: 29
category: Configuration
---

## How to Configure Stripe Plan

Here we will show you how to configure Stripe Plan for recurring payment. Follow the steps below to configure Stripe Plan

1. Go to <a href="http://stripe.com" target="_blank">Stripe</a> and login to your account.

2. Go to your Stripe Dashboard and search for **Product catalog** and click on **Add Product**.
![Adlisting Stripe Plan 1](/docs/adlisting/settings/stripe-plan/1.png)

3. Now you will see a popup. Write the following details in the **Name** and **Statement descriptor** field and click on **Create product** button.
Note: You can write any name in the **Name** field and choose **Recurring** and **Billing Period** as per your requirement.
![Adlisting Stripe Plan 1](/docs/adlisting/settings/stripe-plan/2.png)

4. Now go back to the product catalog page and click on the created product.
![Adlisting Stripe Plan 1](/docs/adlisting/settings/stripe-plan/3.png)

5. Now in the pricing section click on the **Add another price** button if you want to add more pricing plan.
![Adlisting Stripe Plan 1](/docs/adlisting/settings/stripe-plan/4.png)

6. Now copy the **Plan ID** as shown in the screenshot below.
![Adlisting Stripe Plan 1](/docs/adlisting/settings/stripe-plan/5.png)

7. Now we gonna create a new plan in the **Admin Panel** -> **Pricing Plan** click on the **Add New Plan** button.
![Adlisting Stripe Plan 1](/docs/adlisting/settings/stripe-plan/6.png)

8. Now select the **Recurring** Plan Payment Type and paste the **Plan ID** in the **Stripe Plan ID** field and field the other fields as per your requirement.
![Adlisting Stripe Plan 1](/docs/adlisting/settings/stripe-plan/7.png)

8. Now click on the **Create** button to save the settings.


## How to Configure Stripe Webhook

Here we will show you how to configure Stripe Webhook for recurring payment. Follow the steps below to configure Stripe Webhook

1. Go to <a href="http://stripe.com" target="_blank">Stripe</a> and login to your account.

2. Go to your Stripe Dashboard and search for **Developers** and click on **Webhooks**.
![Adlisting Stripe Webhook 1](/docs/adlisting/settings/stripe-webhook/1.png)


3. Click on **Add Endpoint** button.
![Adlisting Stripe Webhook 1](/docs/adlisting/settings/stripe-webhook/2.png)

4. Now you will see a popup. Write the following URL in the **https://your_application_domain.com/stripe-webhook** field and select **invoice.payment_succeeded** from the **Select events** button. 
![Adlisting Stripe Webhook 1](/docs/adlisting/settings/stripe-webhook/3.png)
![Adlisting Stripe Webhook 1](/docs/adlisting/settings/stripe-webhook/4.png)
![Adlisting Stripe Webhook 1](/docs/adlisting/settings/stripe-webhook/5.png)

5. Now go back webhooks page and click on the created webhook endpoint.
![Adlisting Stripe Webhook 1](/docs/adlisting/settings/stripe-webhook/6.png)

6. Click on the **Reval** button to get the signing secret key
![Adlisting Stripe Webhook 1](/docs/adlisting/settings/stripe-webhook/7.png)

7. Copy the signing secret key and paste it in the **Stripe Signing Secret Key** field in the **Admin Panel** -> **Settings** -> **Payment Gateway** -> **Manual Payment** -> **Stripe** tab.
![Adlisting Stripe Webhook 1](/docs/adlisting/settings/stripe-webhook/8.png)

8. Now click on the **Update** button to save the settings.
```
