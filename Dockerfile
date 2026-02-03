

# ---------- build ----------
FROM node:20-alpine AS build
WORKDIR /app

# If your dependencies need native builds, uncomment:
# RUN apk add --no-cache libc6-compat

COPY package.json yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile

COPY . .
RUN yarn build

# ---------- runtime ----------
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# If your runtime needs native libs, uncomment:
# RUN apk add --no-cache libc6-compat

# Install only production deps
COPY package.json yarn.lock ./
RUN corepack enable \
  && yarn install --frozen-lockfile --production=true \
  && yarn cache clean

# Copy build output only
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["node", "build"]

