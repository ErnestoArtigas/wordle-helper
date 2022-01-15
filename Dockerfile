FROM node:17-alpine

WORKDIR /app/src

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]