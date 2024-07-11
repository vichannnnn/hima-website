FROM node:20-alpine as base

FROM base AS build

WORKDIR /app

#ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build