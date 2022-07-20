FROM node:latest

# A simple webserver
RUN npm install -g serve

WORKDIR /usr/src/app

COPY ./frontend .

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]