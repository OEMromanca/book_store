# Základový obraz
FROM node:14-alpine

# Priečinok pre aplikáciu
WORKDIR /app

# Kópiovanie package.json a package-lock.json
COPY package*.json ./

# Inštalácia závislostí
RUN npm install

# Kópiovanie zdrojových súborov
COPY . .

# Kompilácia a vytvorenie produkčného buildu
RUN npm run build

# Nginx obraz
FROM nginx:alpine

# Kopírovanie vytvorených súborov z aplikácie do Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponovanie portu
EXPOSE 88

# Príkaz pre spustenie Nginx servera
CMD ["nginx", "-g", "daemon off;"]
