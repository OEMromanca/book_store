# Základový obraz Node.js
FROM node:lts-alpine

# Pracovný priečinok vo vnútri kontajnera
WORKDIR /usr/src/app

# Nakopírovať súbory balíka package.json a package-lock.json
COPY package*.json ./

# Nainštalovať závislosti pomocou npm
RUN npm ci


# Nakopírovať zvyšok zdrojových súborov
COPY . .

# Kompilovať TypeScript do JavaScript
RUN npm run build

# Expozícia portu 3000 (alebo požadovaného portu pre vášu aplikáciu)
EXPOSE 3000

# Príkaz na spustenie aplikácie
CMD ["npm", "start"]

