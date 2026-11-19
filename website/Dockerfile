# syntax=docker/dockerfile:1
# Build context is the REPO ROOT (the site renders the ../0*-*/ markdown guides).
#   docker build -f website/Dockerfile -t devspeak .
#   or: cd website && docker compose up --build

ARG NODE_VERSION=20-alpine

# ---- deps: install node_modules from the lockfile ----
FROM node:${NODE_VERSION} AS deps
WORKDIR /app/website
COPY website/package.json website/package-lock.json website/.npmrc ./
# HUSKY=0: git hooks are meaningless inside the image.
RUN HUSKY=0 npm ci

# ---- builder: produce the standalone Next.js server ----
FROM node:${NODE_VERSION} AS builder
WORKDIR /app/website
ARG NEXT_PUBLIC_APP_URL=http://localhost:3000
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL} \
    NEXT_TELEMETRY_DISABLED=1
# Copy the whole (dockerignored) repo: website/ plus the ../0*-*/ guides it prerenders at build time.
COPY . /app/
COPY --from=deps /app/website/node_modules ./node_modules
RUN npm run build

# ---- runner: minimal runtime image ----
FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/website/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/website/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/website/.next/static ./.next/static

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null || exit 1

CMD ["node", "server.js"]
