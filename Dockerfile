FROM node:16.14-alpine as build
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json tsconfig.server.json ./
COPY next.config.js nest-cli.json ./
COPY .eslintrc.js .prettierrc ./
COPY webpack-hmr.config.js ./
COPY public ./public
COPY src ./src
RUN npm run build

FROM node:16.14-alpine
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm install
COPY --from=build /.next .next
COPY --from=build /dist dist
EXPOSE 3000
CMD ["npm", "start"]
