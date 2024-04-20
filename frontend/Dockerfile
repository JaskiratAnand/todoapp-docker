FROM node:lts-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY src/assets/delete.svg /usr/src/app/src/assets/delete.svg

RUN npm run build && npm install -g serve

EXPOSE 8080

WORKDIR /usr/src/app/dist

CMD ["serve", "-s", "-p", "8080"]
