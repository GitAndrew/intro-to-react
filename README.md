# intro-to-react

## Introduction

This is a simple project which slowly introduces fundamental React concepts such as components, props, state, adding form elements, hooks and routing. The repository is split into several branches.

## How to run the project

First checkout to the desired branch, then run:

```
  yarn install
  yarn start
```

Starting from the branch '7-adding-data', the app uses [json-server](https://github.com/typicode/json-server) to serve mock data.

To install json-server:

```
  npm install -g json-server

```

To run the server:

```
  json-server --watch db.json --port 9000
```

The data is from this API: https://ghibliapi.herokuapp.com/
