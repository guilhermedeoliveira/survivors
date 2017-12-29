# Survivors
Web application developed to find survivors and share resources between them.

## Comments
It is better to run the project locally, because the app hosted in heroku has some problems with insecure endpoint requests. It has not yet been analysed.

![image](https://user-images.githubusercontent.com/20259146/34442838-a966f72e-eca3-11e7-944d-a1ec08ac0416.png)

## Features
- Add survivor
- Report of infected people
- Report of total points lost in items that belong to infected people
- Report of of non-infected (healthy) people
- Report of items quantity per healthy person
- Report of items quantity per all (healthy and infected) people
- Trade (not finished)
- Update survivor location (not started)

## Folder structure
Each module is organized with its own components, types, actions and reducers

```sh
.
├── cypress // e2e testing
├── node_modules
├── public
├── src // source
│   ├── components // global components
│   ├── map // map module
│   ├── reducers // root reducer
│   ├── report // report module
│   ├── services // services and utilities
│   ├── survivor // survivor module
│   ├── trade // trade module
├── .eslintrc.js
├── .gitignore
├── cypress.json
├── package.json
├── README.md
└── yarn.lock
```

## Tools and Main Libraries
- ES2015
- react.js
- single file component through usage of styled components
- redux, redux-form
- middlewares (redux-logger, redux-thunk)
- style (material-ui, styled-components)
- utils (axios, google-maps-react)
- type checking (prop-types)
- Webpack

## Running locally
Clone project

Install project dependencies

```sh
> yarn
```

Run it locally

```
> yarn start
```

Make share you will open at `http://localhost:3000`;

## Test e2e
```
yarn cypress
```

## Build
```
> yarn build
```

## TODO
- [x] Registration form
- [x] Navigate programmatically to a global map route after register a survivor
- [x] Show different reports
- [x] Show survivors in a global map
- [x] Show survivor's name by clicking in the respective mark
- [x] Refresh map and update survivors location in a global map
- [x] Navigate through AppBar
- [ ] Make trade
- [ ] Update location
- [ ] Flag survivor as infected
- [ ] Tests
- [ ] Review lint

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
