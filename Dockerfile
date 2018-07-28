FROM node:9-alpine

COPY ["./package.json", "./yarn.lock", "/data/"]

WORKDIR /data

RUN yarn install --prod

COPY ./app  /data/app
COPY ./conf /data/conf

CMD ["node", "app/app.js"]