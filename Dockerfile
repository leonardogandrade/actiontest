FROM node:16-slim as BUILDER
LABEL maintainer="Leonardo Gerheim de Andrade"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:16-alpine

ARG NODE_ENV

WORKDIR /usr/src/app
COPY --from=BUILDER /usr/src/app ./

EXPOSE 3009

CMD ["npm", "start"]