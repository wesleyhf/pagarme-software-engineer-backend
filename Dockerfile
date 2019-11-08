FROM node:12-alpine

COPY package.json /app/package.json

WORKDIR /app

RUN yarn install --silent

EXPOSE 80