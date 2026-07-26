FROM node:20-alpine AS build
WORKDIR /app
COPY team-site/package*.json ./
RUN npm ci
COPY team-site/ ./
RUN npm run build

FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY team-site/package*.json ./
RUN npm ci --omit=dev
COPY team-site/server.js ./
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "server.js"]
