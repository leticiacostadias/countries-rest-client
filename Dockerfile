FROM node

WORKDIR /app

ENV NODE_ENV=production COUNTRIES_API=https://restcountries.eu

COPY . .

RUN npm install

EXPOSE 1234 1234

CMD ["npm", "run", "start"]