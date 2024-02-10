FROM node:lts-slim as base
RUN npm install -g pnpm
# Install node packages
WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./.npmrc ./
COPY ./pnpm-lock.yaml ./
RUN pnpm install
# Copy application source
WORKDIR /usr/src
COPY . ./app
WORKDIR /usr/src/app
# Build App
RUN pnpm build
ENV HOST=0.0.0.0
# Deploy
EXPOSE 3000
CMD [ "pnpm", "start" ]
