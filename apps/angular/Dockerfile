FROM node:lts AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:lts-alpine AS final

WORKDIR /app

COPY --from=build /app/dist .

CMD ["node", "dist/angular/server/server.mjs"]
