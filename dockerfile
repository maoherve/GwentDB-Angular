FROM nginx:1.21-alpine

ARG source=./dist/gwent-app

COPY ${source} /usr/share/nginx/html