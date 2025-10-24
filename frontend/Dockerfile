# build environment
FROM node:alpine as builder
WORKDIR /app
COPY ./frontend/package.json ./
RUN npm install
COPY ./frontend .

EXPOSE 8081
CMD npm run web
