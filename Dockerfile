# Stage 1 - the build process
FROM node:16.13.1-alpine as build-deps
WORKDIR /usr/src/app
ARG NPM_TOKEN
COPY .npmrc .npmrc
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build
RUN rm -f .npmrc

# Stage 2 - the production environment
FROM nginx:alpine
ARG COMMIT_SHA
ENV COMMIT_SHA=$COMMIT_SHA
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY nginx-server.conf /etc/nginx/nginx.conf
COPY setVariables.sh /docker-entrypoint.d/50-insert-runtime-variables.sh
RUN chmod +x /docker-entrypoint.d/50-insert-runtime-variables.sh
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
