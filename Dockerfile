FROM public.ecr.aws/docker/library/node:16-alpine as builder

WORKDIR /apps/website

COPY ./package*.json ./
COPY  . .

RUN npm install
RUN npm run build

FROM public.ecr.aws/docker/library/node:16-alpine
WORKDIR /apps/website
ENV NODE_ENV=production

# COPY BUILD PACKAGES
COPY --from=builder /apps/website/package*.json ./
COPY --from=builder /apps/website/build ./build

RUN npm ci

EXPOSE 3000
CMD [ "node", "./build/index.js"]