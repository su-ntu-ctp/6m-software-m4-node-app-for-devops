# Application for Software Engineering DevOps (Module 4)

## Brief

Node application is lightweight and is easy to use as sample application for this DevOps module. Please read on to learn about the basic (Terminal) command to build, test and run a Node application.

## Commands

### npm install

The `npm install` is the first command you will use to install all dependencies specified in the `package.json` file [here](./package.json).

### npm run test

The `npm run test` is the command to run the test script specified in the `package.json` file. This command in turns run the `jest` command.

Sample Snippet from package.json:
```json
  "scripts": {
    "start": "node index.js",
    "test": "jest" // the test script
  }
```

### npm run start

The `npm run start` command will start the application. By default, it will use the `PORT` number specified in the `.env` file [here](./.env). Upon successful start, you will see the logging message:

```sh
Listening to port <port number>
```

