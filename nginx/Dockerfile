FROM nginx:alpine

VOLUME "/www/data/scripts"

EXPOSE 80

COPY nginx.conf ./etc/nginx
COPY ./scripts ./www/data/scripts
