# SemLookP Scheme

## About The Project

This project will be the new frontend scheme of [SemLookP](https://semanticlookup.zbmed.de/ols/index).

## Built With

- [ReactJS 17](https://reactjs.org/blog/2020/10/20/react-v17.html)
- [TypeScript 4.5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)
- [Elastic UI](https://elastic.github.io/eui/#/)
- [@km/widgets-semlookp](https://gitlab.zbmed.de/km/semlookp/widgets-semlookp/-/packages/)
- [Create React App](https://create-react-app.dev/)

## Setup 

### Development
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Authenticate to the npm package registry
For using the @km/widgets-semlookp you have to [authenticate](https://docs.gitlab.com/ee/user/packages/npm_registry/) with a [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) or deploy token.

Create a .npmrc file in the root directory with the following content:
```
@km:registry=https://gitlab.zbmed.de/api/v4/projects/550/packages/npm/
//gitlab.zbmed.de/api/v4/projects/550/packages/npm/:_authToken=<your_token>
```

For starting the application for the first time run the following command:
```
npm install
```
To start the application use the following command In the project directory:
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
