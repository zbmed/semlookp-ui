FROM nginx:alpine
ARG COMMIT_SHA
ENV COMMIT_SHA=$COMMIT_SHA
COPY deployment/nginx.conf /etc/nginx/templates/default.conf.template
COPY deployment/nginx-server.conf /etc/nginx/nginx.conf
COPY deployment/setVariables.sh /docker-entrypoint.d/50-insert-runtime-variables.sh
RUN chmod +x /docker-entrypoint.d/50-insert-runtime-variables.sh
COPY build /usr/share/nginx/html
