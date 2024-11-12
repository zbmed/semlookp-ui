# Terminology Service User Interface

## About

The following represents the frontend scheme for a terminology service.
This repository provides a generic code base from which a specialised terminology service for a given project or domain can be created.
It is recommended that users possess a basic knowledge of coding and of the React framework.
Should assistance be required in setting up a project-specific terminology service branch, please feel free to contact one of the developers.

This is the first version of a shared frontend codebase and is under active development. 
So please forgive any errors that occur.
We would be grateful if you could report any bugs.

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
Create a file in the project root directory named `.npmrc` and add the following two lines. Replace `TOKEN` with your
[personal access token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

```
@ts4nfdi:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

#### Docker
To run the Docker container, do:

```shell
npm install
npm run build
docker build -t semlookp-ui .
docker run --name semlookp-ui -p 8080:80 semlookp-ui
```

#### Local development

To start the application for the first time, install the modules and start the development server:

```shell
npm install
npm start
```

Accessible at: [http://localhost:3000](http://localhost:3000).

The page will reload when you make edits.\

We use prettier for code formatting. Run

```
npm run style:format
npm run style:ceck
```

to format or check all files.

## Hints for using the generic code base

The main branch represents the generic codebase.
Project specific branches can be added.
Those specific branches should stick to the given structure to allow updates.

To create a project specific branch, follow these steps:

1. Create a new branch from main.

```
git checkout main
git pull
git checkout -b name-of-your-new-branch
```

2. Copy `src/defaultTemplate` folder and rename it to `src/projectSpecific`.
   Delete the `src/projectSpecific/defaultTemplateLayout` directory.
   Rename `src/defaultTemplate/defaultTemplateComponents` and `src/defaultTemplate/defaultTemplateMarkdown` to
   `src/projectSpecific/projectSpecificComponents` and `src/projectSpecific/projectSpecificMarkdown`
   Keep the defaultTemplate directory for merging with the main branch. Updates (bug fixes and new features) will be integrated via these default template files and are the basis for the project specific files.

3. Rename and modify the files in the projectSpecific directory according to your needs. Change the names in the componentMap.js.

4. Following configuration files need to be adapted in this specific branch:

- `src/config.js` contains project specific metadata such as funding notice, project description or contact mail address
- `src/theme.ts` contains project specific colors and shapes
- `src/componentMap.js` defines component mappings of specific components to common names
- `src/imageMap.js` defines image maps of specific images to common names

a) Replace _// defaultTemplate_ at the beginning of each of these four files with your project name to make Git Attributes work.
b) Rename the components in `src/projectSpecific/projectSpecificComponents` and adapt the paths in `src/componentMap.js` accordingly

5. Create the local image directory `src/projectSpecificImages`.
   Define image maps in `src/imageMap.js`.

   Images from remote sources must be implemented directly into the code base, and therefore do not support compatibility with the main branch.
   We have therefore decided not to include images via links in the generic code base.
   In project specific components you are free to import images via links.

6. Adapt or remove CI script
7. Run

```
npm run style:format
```

### Merging the main branch to stay up to date

The main branch keeps the generic code base. Bug fixes and new features will be integrated into main. To prevent specific files in your branch to be overwritten by main during merge, use `.gitattributes`.
You can configure the `.gitattributes` file to exclude or retain files during the merge process.

IMPORTANT NOTE: Git Attributes only works locally. Merging the main branch into a specific branch via pull request on GitHub may result in files being overwritten.

1. Edit the `.gitattributes` file in your project specific branch. Minimal required configuration:

```
.gitattributes merge=ours
```

2. _Specify the files to be ignored during merging:_ In .gitattributes, for each file you want to prevent from being merged, you need to set the merge=ours attribute. This tells Git to keep the version of the file from the current branch (in this case, your branch) during a merge.
   For example:

```
path/to/file1.txt merge=ours
path/to/file2.txt merge=ours
```

3. _Configure the 'ours' merge driver:_ Now you need to tell Git what merge=ours means. This is done by configuring the merge driver in the .git/config file or globally in ~/.gitconfig.
   Add the following to your .git/config file:

```
[merge "ours"]
driver = true
```

by running:

```
git config  merge.ours.driver true
```

Check config with

```
git config --list
```

4. _Commit the changes in your branch:_ After adding or editing the .gitattributes file, commit this change in your branch.
5. IMPORTANT NOTE: Git Attributes only works for conflicting files. Hence, add your project name on top of the project specific files to trigger the merge conflict.
6. Merge main into your branch. You should see something like this:

```
$ git merge main
Auto-merging somefile
Merge made by recursive.
```

6. Take a look at the project structure and your files and make sure everything went to plan.

### Merging a project specific branch into main

Merging a project specific branch into the main branch isn't possible.
New features should be developed in the main branch.

## Funding

This project is developed by the [NFDI4Health consortium](https://www.nfdi4health.de) and the Terminology Services for NFDI (TS4NFDI) project (as part of the [Base4NFDI consortium](https://base4nfdi.de/)).

The NFDI4Health Consortium gratefully acknowledges the financial support of the Deutsche Forschungsgemeinschaft
(DFG, German Research Foundation) – project number 442326535.

The project is derived from the Semantic Lookup Platform SemLookP which was also developed
by [ZB MED - Information Centre for Life Sciences](https://www.zbmed.de/en/).
