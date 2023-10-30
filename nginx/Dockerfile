FROM nginx:alpine

VOLUME "/app/static"

EXPOSE 80

COPY nginx.conf ./etc/nginx
COPY ./scripts ./www/data/scripts
