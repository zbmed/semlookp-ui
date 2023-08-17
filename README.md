# SemLookP Scheme

## About The Project

This project will be the new frontend scheme of [SemLookP](https://semanticlookup.zbmed.de/ols/index).

## Built With

- [ReactJS 17](https://reactjs.org/blog/2020/10/20/react-v17.html)
- [TypeScript 4.5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)
- [Elastic UI](https://elastic.github.io/eui/#/)
- [@nfdi4health/semlookp-widgets](https://github.com/nfdi4health/semlookp-widgets/pkgs/npm/semlookp-widgets)
- [Create React App](https://create-react-app.dev/)

## Setup 

### Development
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Authenticate to the npm package registry
For using the @nfdi4health/semlookp-widgets you have to authenticate with a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
For local development specify a runtime variable NPM_TOKEN with your npm authentication token.

#### Local development
For starting the application for the first time run the following command:
```
npm install
```
To start the application use the following command In the project directory:
```
npm start
```
Open [http://localhost:3000/dev](http://localhost:3000/dev) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Production
Create production build for all services:  
Uncomment `build: ./` in `docker-compose.yaml`  
Set an environment variable with your NPM_TOKEN.  
Run the following to build the Docker image with the current NPM_TOKEN environment variable.

```
$ docker-compose --env-file dev.env build --build-arg NPM_TOKEN=${NPM_TOKEN}
$ docker-compose --env-file dev.env up
```
[Docker and private modules](https://docs.npmjs.com/docker-and-private-modules)
