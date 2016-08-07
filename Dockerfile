FROM node:latest

RUN apt-get update \
    && echo 'yes' | apt-get install nginx

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

CMD nginx