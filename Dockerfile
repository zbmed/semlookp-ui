FROM nginx:alpine
ARG COMMIT_SHA
ENV COMMIT_SHA=$COMMIT_SHA
COPY deployment/nginx.conf /etc/nginx/templates/default.conf.template
COPY deployment/nginx-server.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html
