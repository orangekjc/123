<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

#### Prerequisites

##### Register client on sgid

1. Register a client on developer.id.gov.sg with `PUBLIC OFFICER DETAILS` included in the scope.
2. Include `http://localhost:3000/auth/sgid/callback` in the Redirect Urls.

##### Environment variables

The server needs a few environment variables to be set for it to function. They are:

| Name                 | What It Is                                                 | Example                                               |
| -------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| `SGID_CLIENT_ID`     | The client ID provided during client registration          | TELEGOVSG-780ba228                                    |
| `SGID_CLIENT_SECRET` | The client secret provided during client registration      | asdfn_v1_6DBRljleevjsd9DHPThsKDVDSenssCwW9zfA8W2ddf/T |
| `SGID_PRIVATE_KEY`   | The client private key provided during client registration | xxxxxxxxxx                                            |

## Installation

## Setting up local development environment

### Create env file

1. Copy .env.example to .env

```bash
$ cp .env.example .env
```

### Set up telegram bot

1. Create a new bot with BotFather
2. Copy the token and paste it in the .env file in BOT_TOKEN

### Set up tunnel to get a domain name for the webhook

1. Install ngrok
2. Go to [ngrok dashboard](https://dashboard.ngrok.com/cloud-edge/domains) and create a new permanent domain
3. Copy the domain and paste it in the .env file in BOT_DOMAIN
4. Run ngrok with the following command whenever you're doing local testing

```bash
$ ngrok http <YOUR_DOMAIN> 3000
```

### Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Forangekjc%2F123%2Ftree%2Fmaster&env=SGID_CLIENT_ID,SGID_CLIENT_SECRET,SGID_PRIVATE_KEY,BOT_TOKEN,DATABASE_URL)

1. Click the button above to clone and deploy this project.
2. You will need your SGID secrets and Telegram bot token during the deployment process.
3. Visit the [SGID dashboard](https://developer.id.gov.sg/dashboard) and add your deployed application's domain name. It should be in the following format: `<project_name>-git-master-<your_name>s-projects.vercel.app`.
