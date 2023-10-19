---
title: Cron Job Setting
position: 29
category: System Setting
---

# Cron Job

If you want to learn more about upgrading your application, you are in the right place. Below we have added 5 easy steps to upgrade your application today.

### How to Setup Cronjob

1. Go to your cPanel and click on the **Cron Jobs** icon.
   ![](/docs/jobpilot/setting/cronjob-1.png)

2. Write the following command in the **Command** field `/usr/local/bin/php /home/SERVER_PATH/script/artisan schedule:run >> /dev/null 2>&1`
   ![](/docs/jobpilot/setting/cronjob-2.png)

**Note: Replace the SERVER_PATH with your website files directory .**

3. Select the time interval you want to run the cron job.
   **Note: We recommend you to run the cron job every 5 minutes.**
   ![](/docs/jobpilot/setting/cronjob-3.png)

4. Click on the **Add New Cron Job** button.
