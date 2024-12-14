FROM node:lts AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:lts-alpine AS final

WORKDIR /app

COPY --from=build /app/dist/angular .

CMD ["node", "server/server.mjs"]
