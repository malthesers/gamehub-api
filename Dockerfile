FROM node:18.0-alpine3.17

WORKDIR /app/

COPY package*.json /.

RUN npm ci

COPY . /.

EXPOSE 3000

CMD ["npm", "dev"]