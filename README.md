<p align="center">
  <a href="https://expressjs.com/" target="blank"><img src="docs/images/boilerplate.png" alt="Express Logo" width="512" /></a>
</p>

<h1 align="center">⭐ Express Typescript basic boilerplate ⭐</h1>

<p align="center">
  Very basic NodeJS using Express and Typescript template, especially focused on providing a good starting point with all the tooling neede as code quality, bundle, lint, test etc... 🚀
</p>

<p align="center">
  <a href="https://github.com/servatj/typescript-basic-express-boilerplate/actions/workflows/node.yml?branch=main"><img src="https://github.com/servatj/typescript-basic-express-boilerplate/actions/workflows/node.yml/badge.svg?branch=main" alt="nodejs"/></a>
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/node-20.x-green.svg" alt="node"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-5.x-blue.svg" alt="typescript"/></a>
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-10.x-red.svg" alt="npm"/></a>
  <a href="https://swc.rs/"><img src="https://img.shields.io/badge/Compiler-SWC_-orange.svg" alt="swc"/></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Test-Vitest_-yellow.svg" alt="swc"/></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Dockerized 🐳_-blue.svg" alt="docker"/></a>
</p>

## 📗 Features

1. Typescript as main language. 🦄
2. Fully dockerized service. 🐳
3. [SWC](https://swc.rs/) for compiling and running the tests of the service.
4. [Express](https://expressjs.com/) as framework, but you can replace it by any and build a more sophisticated layered architerture, clean etc.
5. Pre commit and pre push actions using [husky](https://typicode.github.io/husky/):
   - pre-commit: linting.
   - pre-push: run tests.
6. Testing with [Vitest](https://vitest.dev/) and [supertest](https://github.com/ladjs/supertest) for unit and e2e tests. 🧪
7. Performance testing using [k6](https://grafana.com/oss/k6/).
8. 🚀 CI/CD using GitHub Actions.

## Getting Started

### Installation

First, you will need to clone the repository:

```bash
git clone
```

Then, you will need to install the dependencies:

```bash
npm install
```

### Running

First, we will need to create our .env file, we can create a copy from the example one:

```bash
cp .env.example .env
```

the file only includes one variable, the `PORT` where the service will be running, but this means that the configuration package is working and you can include more variables in the future.

```bash
PORT=3000
```

The config module is using the `dotenv` package, so you can include more variables in the future.

```typescript
export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
};
```

Run the service in **development mode**:

```
npm run dev
```

## Container

The project is fully dockerized 🐳, if we want to start the app in **development mode**, we just need to run:

```bash
docker-compose up -d my-service-dev
```

This development mode with work with **hot-reload** and exposing a **debug port**, the `9229`, so later we can connect from our editor to it.

Now, you should be able to start debugging configuring using your IDE. For example, if you are using vscode, you can create a `.vscode/launch.json` file with the following config:

```json
{
  "version": "0.1.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to docker",
      "restart": true,
      "port": 9229,
      "remoteRoot": "/app"
    }
  ]
}
```

Also, if you want to run the **production mode**, you can run:

```bash
docker-compose up -d my-service-production
```

This service is providing just a health endpoint which you can call to verify the service is working as expected:

```bash
curl --request GET \
  --url http://localhost:3000/health
```

If you want to stop developing, you can stop the service running:

```bash
docker-compose down
```

## ⚙️ Building

```bash
npm run build
```

## ✅ Testing

The service provide unit and e2e tests, you can run them executing, they are not separated in different folders, but you can do it if you want to:

```bash
npm run test
```

We also have performance testing with [k6](https://k6.io/), if you want to run it via docker, execute:

```bash
docker-compose up k6
```

Or if you want to run it from your machine, execute:

```bash
brew install k6 # if you have a mac
npm run test:performance
```

```bash
winget install k6 # if you have a windows
npm run test:performance
```

## 💅 Linting

To run the linter you can execute:

```bash
npm run lint
```

And for trying to fix lint issues automatically, you can run:

```bash
npm run lint:fix
```
