FROM node:latest
RUN npm install -g nodemon
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install dotenv

COPY . .
EXPOSE 5000

CMD ["npm", "run", "dev"]