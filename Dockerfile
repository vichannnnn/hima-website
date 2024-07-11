FROM node:20-alpine as base

FROM base AS build

WORKDIR /app

#ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile --force
COPY . .
RUN npm run build