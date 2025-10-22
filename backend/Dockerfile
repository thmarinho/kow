FROM node:22
WORKDIR /app
RUN ls
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]
