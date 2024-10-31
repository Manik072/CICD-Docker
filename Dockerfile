FROM node

WORKDIR /app

COPY package.json package.json    
COPY package-lock.json package-lock.json

RUN npm install

COPY . /app

EXPOSE 3000 

CMD ["node", "server.js"]



