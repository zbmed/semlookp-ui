[comment]: <> (health)

# Terminology Service User Interface

## About

The following represents the frontend scheme for the NFDI4Health terminology service.

## Built With

- ReactJS 18
- TypeScript
- [Elastic UI](https://elastic.github.io/eui/#/)
- [@ts4nfdi/terminology-service-suite](https://github.com/ts4nfdi/terminology-service-suite)
- Vite

## Setup

### Development


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

The page will reload when you make edits.

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

## Funding

This project is developed by the [NFDI4Health consortium](https://www.nfdi4health.de) and the Terminology Services for NFDI (TS4NFDI) project (as part of the [Base4NFDI consortium](https://base4nfdi.de/)).

The NFDI4Health Consortium gratefully acknowledges the financial support of the Deutsche Forschungsgemeinschaft
(DFG, German Research Foundation) – project number 442326535.

The project is derived from the Semantic Lookup Platform SemLookP which was also developed in part
by [ZB MED - Information Centre for Life Sciences](https://www.zbmed.de/en/).
