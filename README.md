# Terminology Service User Interface

## About The Project

This is the frontend scheme of the Terminology Service NFDI4Health.

## Built With

- [ReactJS 17](https://reactjs.org/blog/2020/10/20/react-v17.html)
- [TypeScript 4.5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)
- [Elastic UI](https://elastic.github.io/eui/#/)
- [@ts4nfdi/terminology-service-suite](https://github.com/nfdi4health/semlookp-widgets)
- [Create React App](https://create-react-app.dev/)

## Setup

### Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Authenticate to the npm package registry

For using the @ts4nfdi/terminology-service-suite you have to [authenticate](https://docs.github.com/de/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authentifizieren-mit-einem-personal-access-token) with a personal access token or deploy token.
For local development specify a runtime variable NPM_TOKEN with your npm authentication token.

#### Local development

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

## Hints for using the generic code base

#### Metadata

Metadata as funding notice, project description or contact mail address are specified in the `src/config.js`.

#### Logos

The logos for the footer should be placed at the `src/components/layout/logos/` folder. They are imported at `src/imports/ImageImport.tsx` and in the corresponding components.

#### Theming

We use "@emotion/react". Themes are defined in `src/theme.ts` and in `src/emotion.d.ts`

#### Git
The main branch keeps the generic code base. To prevent specific files in your branch from being merged into main, use .gitattributes.
you can configure the .gitattributes file to exclude or retain files during the merge process.

1. Create or Edit .gitattributes file: In your branch, edit the .gitattributes file. 
2. Specify the files to ignore during merging: In .gitattributes, for each file you want to prevent from being merged, you need to set the merge=ours attribute. This tells Git to keep the version of the file from the current branch (in this case, your branch) during a merge.
For example:  
`
path/to/file1.txt merge=ours
path/to/file2.txt merge=ours`
3. Configure the 'ours' merge driver: Now you need to tell Git what merge=ours means. This is done by configuring the merge driver in the .git/config file or globally in ~/.gitconfig.
Add the following to your .git/config file:  
`
[merge "ours"]
    name = "Keep our version"
    driver = true
`
4. Commit the changes in your branch: After adding or editing the .gitattributes file, commit this change in your branch.
5. Merge main into your branch.  
`
git merge main`




## Funding

This project is developed by the [NFDI4Health consortium](https://www.nfdi4health.de) and the Terminology Services for NFDI (TS4NFDI) project (as part of the [Base4NFDI consortium](https://base4nfdi.de/)).

The NFDI4Health Consortium gratefully acknowledges the financial support of the Deutsche Forschungsgemeinschaft
(DFG, German Research Foundation) – project number 442326535.

The project is derived from the Semantic Lookup Platform SemLookP which was also developed in part
by [ZB MED - Information Centre for Life Sciences](https://www.zbmed.de/en/).
