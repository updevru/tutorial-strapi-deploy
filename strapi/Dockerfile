FROM node:20-alpine as build
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app
COPY package.json .
COPY package-lock.json .

RUN npm install --force

COPY ./ .
RUN npm run build


FROM node:20-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk add vips-dev
RUN rm -rf /var/cache/apk/*

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app
COPY --from=build /opt/app ./

EXPOSE 1337
CMD ["npm", "run","start"]
