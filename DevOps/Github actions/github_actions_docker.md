# 🚀 Automated Docker Build & Push with GitHub Actions

This repository features a fully automated CI/CD pipeline using **GitHub Actions**. Every time you push code to the `main` branch, GitHub automatically builds your Docker image and pushes the latest version directly to **Docker Hub**.

---

## 🛠️ How It Works (The Pipeline Flow)

1. **Code Push:** You push changes to the `main` branch.
2. **Environment Setup:** GitHub Actions spins up a fresh, isolated virtual Ubuntu runner (`ubuntu-latest`).
3. **Checkout:** The runner downloads your repository code.
4. **Authentication:** The runner securely logs into Docker Hub using encrypted repository secrets.
5. **Build & Push:** The runner builds your `Dockerfile` and uploads the image tagged as `latest` to your Docker Hub registry.

---

## 📋 Prerequisites & Setup

To make this pipeline function correctly, you need to link your GitHub repository to your Docker Hub account securely.

### Step 1: Generate a Docker Hub Access Token

Instead of using your raw password, it is best practice to use an Access Token.

1. Log into your [Docker Hub Account](https://hub.docker.com/).
2. Click your profile icon in the top right and go to **Account Settings**.
3. On the left sidebar, click **Security** -> **Personal access tokens**.
4. Click **Generate new token**, give it a name (e.g., `GitHub Actions CI`), and set the permissions to **Read & Write**.
5. **Copy the token immediately**—you won't be able to see it again!

### Step 2: Add Secrets to Your GitHub Repository

Never hardcode your credentials in a file. Save them as encrypted secrets:

1. Go to your repository on GitHub.
2. Click on the **Settings** tab (the gear icon at the top).
3. On the left sidebar, expand **Secrets and variables** and click **Actions**.
4. Click the **New repository secret** button to add the following two keys:

| Secret Name          | Value to Paste                                  |
| :------------------- | :---------------------------------------------- |
| `DOCKERHUB_USERNAME` | Your exact Docker Hub username.                 |
| `DOCKERHUB_TOKEN`    | The personal access token you copied in Step 1. |

---

## 📂 Project Structure

For this specific configuration to run, your project layout should look like this:

```text
├── .github/
│   └── workflows/
│       └── docker-publish.yml   <-- The automation pipeline file
├── Dockerfile                  <-- Your app build instructions
├── (Rest of your application code...)
```
