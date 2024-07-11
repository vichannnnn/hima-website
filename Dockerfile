FROM node:22-alpine3.19 as base

FROM base AS build

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile --legacy-peer-deps
COPY . .
RUN npm run build