---
title: Google Job Posting
position: 25
category: System Setting
---

## What is the Google Indexing API?

The indexing API is an Application Programming Interface that allows site owners to notify Google when pages are added or removed. This allows Google to instantly index any webpage. It is mainly used for short-lived content such as job postings and news articles.

## How to get setup with Google Indexing API?

### 1. Create your API project

- Go to the [Google API Console](https://console.developers.google.com/) and create a new project.

![](/docs/jobpilot/google-job/1.png)

- Give it a name and click “CREATE”.
  ![](/docs/jobpilot/google-job/2.png)

### 2. Create a service account

The service account will act as the email that will interact with the indexing API. Make sure that you are in the project that you just created.

- Go to the [Service Accounts](https://console.cloud.google.com/apis/credentials) page and Click on “Manage service accounts”.

![](/docs/jobpilot/google-job/3.png)

- Click on `CREATE SERVICE ACCOUNT`.

![](/docs/jobpilot/google-job/4.png)

- Then, create the service account with the information that you want.

![](/docs/jobpilot/google-job/5.png)

- Select the `Owner` role.

![](/docs/jobpilot/google-job/6.png)

- You can skip the next step and create the service account.

### 3. Create API Keys

First, store the email ending in “gserviceaccount.com” for later use. For the newly created service account, you will need to create the API keys that will act as the username and password for your application.

![](/docs/jobpilot/google-job/7.png)

- Click on `ADD KEY` > `Create new key`.

![](/docs/jobpilot/google-job/8.png)

- Select JSON for your private key, and then click on `CREATE`.

![](/docs/jobpilot/google-job/9.png)

- Save the file somewhere safe.

### 4. Enable Indexing API

Now, the API needs to be enabled in your project for you to use it.

- Go to the [Indexing API](https://console.cloud.google.com/apis/library/indexing.googleapis.com) page and click on `ENABLE`.

![](/docs/jobpilot/google-job/10.png)

### 5. Give Owner Status to the Service Account

For the indexing API to work properly, you need to give ownership to your service account email in the webmaster center.

- Go to the [Webmaster Center](https://www.google.com/webmasters/tools/home) and click on `Add a property`.

- Add the property that you want to use the indexing API on, or choose from the list.

![](/docs/jobpilot/google-job/11.png)

- Go to `Verified owners` and click on `ADD AN OWNER`.

![](/docs/jobpilot/google-job/12.png)

### 6. Final Step

- Rename the JSON file to credentials.json
- Upload the credentials.json file to your server in the following path: `resources/credentials.json`
