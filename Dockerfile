FROM node:20

WORKDIR /app

ENV NODE_ENV=production

COPY . .

RUN npm install && npm install -g parcel

EXPOSE 1234 1234

CMD ["npm", "run", "start"]
