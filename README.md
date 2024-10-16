# Terminology Service User Interface

## About

The following represents the frontend scheme for a terminology service. This repository provides a generic code base from which a specialised terminology service for a given project or domain can be created. It is recommended that users possess a basic knowledge of coding and of the React framework. Should assistance be required in setting up a project-specific terminology service instance, please feel free to contact one of the developers.

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
The main branch represents the generic code base.
Project specific branches can be added.
Those specific branches should stick to the given structure to allow updates.

Following configuration files need to be adapted in a specific branch:

- `src/config.js` contains project specific metadata such as funding notice, project description or contact mail address
- `src/theme.ts` contains project specific colors and shapes
- `src/componentMap.js` defines component mappings of specific components to common names
- `src/componentMap.js` defines image maps of specific images to common names

The `.gitattributes` files should contain any project-specific files that should NOT be merged with the main branch, e.g the `src/config.js`, deployment files or specific components.

### Images
Images from remote sources must be implemented directly into the code base, and therefore do not support compatibility with the main branch.
We have therefore decided not to include images via links in the generic code base.
In project specific components you are free to import images via links.

#### Git
The main branch keeps the generic code base. To prevent specific files in your branch from being merged into main, use `.gitattributes`.
you can configure the `.gitattributes` file to exclude or retain files during the merge process.

1. Edit `.gitattributes` file: In your project specific branch, edit the .gitattributes file.
2. Specify the files to ignore during merging: In .gitattributes, for each file you want to prevent from being merged, you need to set the merge=ours attribute. This tells Git to keep the version of the file from the current branch (in this case, your branch) during a merge.
   For example:  
    `
path/to/file1.txt merge=ours
path/to/file2.txt merge=ours`  
    _Use your project short name (e.g. health) instead of "ours"._
3. Configure the 'ours' merge driver: Now you need to tell Git what merge=ours means. This is done by configuring the merge driver in the .git/config file or globally in ~/.gitconfig.
   Add the following to your .git/config file:  
    `[merge "ours"]
name = "Keep our version"
driver = true`  
    You can either do it manually or using:  
    `git config --global merge.ours.driver true`  
    Check with  
    `git config --global --list`
4. Commit the changes in your branch: After adding or editing the .gitattributes file, commit this change in your branch.
5. Merge main into your branch. You should see something like this:

```
$ git merge main
Auto-merging somefile
Merge made by recursive.
```

## Funding

This project is developed by the [NFDI4Health consortium](https://www.nfdi4health.de) and the Terminology Services for NFDI (TS4NFDI) project (as part of the [Base4NFDI consortium](https://base4nfdi.de/)).

The NFDI4Health Consortium gratefully acknowledges the financial support of the Deutsche Forschungsgemeinschaft
(DFG, German Research Foundation) – project number 442326535.

The project is derived from the Semantic Lookup Platform SemLookP which was also developed in part
by [ZB MED - Information Centre for Life Sciences](https://www.zbmed.de/en/).
