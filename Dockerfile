FROM node:latest

RUN apt-get update \
    && apt-get -y install nginx

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY ./env_nginx_conf.js /var/

CMD nginx