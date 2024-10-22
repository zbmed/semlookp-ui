# Terminology Service User Interface

## About

The following represents the frontend scheme for the BERD@NFDI terminology service.

## Built With

- [ReactJS 17](https://reactjs.org/blog/2020/10/20/react-v17.html)
- [TypeScript 4.5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)
- [Elastic UI](https://elastic.github.io/eui/#/)
- [@ts4nfdi/terminology-service-suite](https://github.com/ts4nfdi/terminology-service-suite)
- [Create React App](https://create-react-app.dev/)

## Setup

### Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Authenticate to the npm package registry

For using the @ts4nfdi/terminology-service-suite you have to [authenticate](https://docs.github.com/de/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authentifizieren-mit-einem-personal-access-token) with a personal access token or deploy token.
For local development specify a runtime variable NPM_TOKEN with your npm authentication token

OR

add the following two lines to your local npm configuration `~/.npmrc`. Replace `TOKEN` with your personal access
token (classic).

```
@ts4nfdi:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

#### Local development

For instructions on using the generic code base, see the README in the main branch.
To start the application for the first time, install the modules with:

```
npm install
```

Start the development server with:

```
npm start
```

Accessible at [http://localhost:3000](http://localhost:3000).

The page will reload when you make edits.\
You will also see any lint errors in the console.\
We use prettier for code formatting. Run

```
npm run style:format
npm run style:ceck
```

to format or check all files.
