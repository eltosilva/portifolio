FROM docker.io/node AS build

WORKDIR /usr/src/app

COPY . .

RUN npm i
RUN npm run build:prod

FROM docker.io/httpd:alpine

COPY --from=build /usr/src/app/dist /usr/local/apache2/htdocs