FROM node:14-buster 

WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
