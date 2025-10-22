FROM node:22
WORKDIR /app
COPY ./backend/package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]
