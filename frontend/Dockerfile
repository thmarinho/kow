# build environment
FROM node:alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./frontend .

EXPOSE 8081
CMD run run web
