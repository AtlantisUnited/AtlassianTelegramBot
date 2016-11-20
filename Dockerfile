FROM node:6

RUN mkdir -p /var/www
WORKDIR /var/www/
COPY . /var/www/

RUN node -r babel-register src/index.js
