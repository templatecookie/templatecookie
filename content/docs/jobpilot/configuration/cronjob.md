---
title: Cron Job Setting
position: 29
category: Configuration
---

# Cron Job

If you want to learn more about upgrading your application, you are in the right place. Below we have added 5 easy steps to upgrade your application today.

### How to Setup Cronjob

1. Go to your cPanel and click on the **Cron Jobs** icon.
   ![Jobpilot Cron Jobs Setup 1](/docs/jobpilot/setting/cronjob-1.png)

2. Write the following command in the **Command** field `/usr/local/bin/php /home/hashichg/public_html/artisan schedule:run  >> /dev/null 2>&1`
   ![Jobpilot Cron Jobs Setup 2](/docs/jobpilot/setting/cronjob-2.png)

3. Select the time interval you want to run the cron job.
   **Note: We recommend you to run the cron job every 5 minutes.**
    ![Jobpilot Cron Jobs Setup 3](/docs/jobpilot/setting/cronjob-3.png)
    ![Jobpilot Cron Jobs Setup 3](/docs/jobpilot/setting/cronjob-4.png)

4. Click on the **Add New Cron Job** button.
