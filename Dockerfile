FROM oven/bun:1.1.18 as base

FROM base AS build

WORKDIR /app

ENV NODE_ENV=production

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build