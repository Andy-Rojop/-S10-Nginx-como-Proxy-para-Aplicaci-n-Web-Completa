FROM node:20-alpine


WORKDIR /app


# Copia package.json y package-lock si existiera
COPY package.json ./


RUN npm install --production


COPY src ./src


EXPOSE 3000


CMD ["node", "src/index.js"]