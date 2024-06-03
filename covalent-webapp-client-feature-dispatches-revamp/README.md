# Covalent Cloud UI

## Prerequisites

- Clone the repo

- Install `node` (v16 or later) and `npm`:

```shell
# Linux
curl -sL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs

# macOS
brew install node
```

- Install `yarn`:

```shell
npm install --global yarn
```

## Two different ways for deployment

- [Local Setup](#local-setup)
  - [Developer Guidelines](#developer-guidelines)
    - [Amplify Setup](#amplify-setup)
    - [Run web app](#run-web-app)
    - [Build web app](#build-web-app)
    - [Serving Local Build](#serving-local-build)
- [AWS Amplify Deployment](#amplify-deployment)
  - [Connecting a new branch](#connecting-a-new-branch)
  - [Setting up a Backend environment](#setting-up-a-backend-environment)
  - [Connect a frontend app branch and cloud backend](#connect-a-frontend-app-branch-and-cloud-backend)
  - [Viewing Deployment](#viewing-deployment)

## Local Setup

### Developer Guidelines

Tech Stack:

- `React`is used for frontend development.
- `AWS Amplify` is used for backend authentication and as the deployment platform.

### Amplify Setup

- Install the Amplify Command Line Interface (CLI) using the following command.

```shell
npm install -g @aws-amplify/cli
```

To connect a cloud backend to a local frontend:

- Open a terminal window and navigate to the root directory of your local project.

- Run the following command in the terminal window, replacing the unique app ID and backend environment name for your project.

```shell
  amplify pull --appId YOUR_APP_ID --envName YOUR_ENV_NAME
```

---

**Note**

The above command can also be found as follows:

- Log in to [AWS Management console](https://console.aws.amazon.com/)
- Select `AWS Amplify` in services
- Select the required app from all apps.
- Select `Backend Environments` tab.
- In that, under `Local setup Instructions`, the command can be found.
  ![amplify local instructions](/src/assets/readme/amplifyLocalIns.png)

---

- Follow the instructions in the terminal window to complete the project set up.

### Run web app

- By default, `.env.int` file's configurations will be used.
- Any endpoint or custom configuration changes that are needed can be made to the `.env.int` file.
- Run the following commands from root folder to start.

```shell
yarn install
yarn start
```

- Open `http://localhost:8080` in your browser to view the running web app.

### Build web app

- For building the app locally, add a new configuration file `.env.deployment` in root folder with the required endpoints and configurations, if the file is not available.
- Run the following commands from root folder to start the build.

```shell
yarn install
yarn build
```

### Serving Local Build

- The optimized production build of the UI web app lives under `build` folder.
- The build can be served using the following commands from root folder.

```shell
npm install -g serve
serve -s build
```

## AWS Amplify Deployment

- Login to the AWS [console](https://console.aws.amazon.com/).
- In the services, select AWS Amplify.

![amplify service](/src/assets/readme/amplifyService.png)

- Select the required app from the list of apps or add a new app using the available context menu.

![new app](/src/assets/readme/newApp.png)

- Connect your GitHub, Bitbucket, GitLab, or AWS CodeCommit repository.

![new repo](/src/assets/readme/newRepo.png)

- After you connect the repository service provider, choose a repository, and then choose a corresponding branch to build and deploy.

![new branch](/src/assets/readme/addRepoBranch.png)

- For the selected branch, Amplify inspects your repository to automatically detect the sequence of build commands to run.

![build commands](/src/assets/readme/buildCommands.png)

- Verify that the build commands and build output directory (that is, artifacts > baseDirectory) is accurate. If you need to modify this information, choose Edit to open the YML editor.

![edit commands](/src/assets/readme/editCommands.png)

### Connecting a new branch

After connecting your first branch, you can create a new feature branch deployment by adding a branch as follows:

- On the branch list page, choose Connect branch.

- Choose a branch from your repository.

- Save and then deploy your app.

- Your app now has two deployments available

![multiple apps](/src/assets/readme/multipleapps.png)

### Setting up a Backend environment

To create a backend

- On the app homepage, choose the `Backend environments` tab, then choose Get started. This initiates the set up process for a default staging environment.

- After the set up finishes, choose Launch Studio to access the staging backend environment in Amplify Studio.

![backend](/src/assets/readme/backend.png)

![backend studio](/src/assets/readme/backendStudio.png)

- Select the Authentication option from the left sidebar.

- Configuration can be started from scratch or existing cognito resources can be reused.

![Authentication from scratch](/src/assets/readme/scratchAuth.png)
![Authentication existing](/src/assets/readme/reuseAuth.png)

- If reusing the cognito resources, Select a Cognito user pool and App clients required for your application.

![Authentication cognito](/src/assets/readme/cognito.png)

then click `Import` to deploy your changes.

### Connect a frontend app branch and cloud backend

To connect a frontend app branch and cloud backend:

- On the app homepage, choose the Hosting environments tab.

- Locate the main branch and choose Edit.

![edit](/src/assets/readme/editOption.png)

- In the Edit target backend window, for Environment, select the name of the backend to connect.

### Viewing Deployment

- The build deployment status can be observed and the url can be accessed from the hosting environments tab.

![deploy](/src/assets/readme/deploy.png)
