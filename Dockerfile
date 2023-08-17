# Use the Node.js LTS Alpine image as the base image for development
FROM node:lts-alpine AS development

# Set the environment to development
ENV NODE_ENV development

# Create and set the working directory for the frontend
RUN mkdir -p /app/frontend
WORKDIR /app/frontend

# Copy frontend package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy frontend source files
COPY frontend/ ./

# Build the frontend
RUN npm run build

# Switch to the backend directory
WORKDIR /app/backend

# Copy backend package.json and install dependencies
COPY backend/package*.json ./
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy backend source files
COPY backend/ ./

# Build the backend
RUN npm run build

# Create a directory for the final distribution
WORKDIR /app
RUN mkdir -p /app/dist

# Copy the project files
COPY . .

# Build the root folder
RUN npm run build-root

# Expose ports 3000 and 3001 for the application
EXPOSE 3000 3001

# Define the command to start the application
CMD ["npm", "start"]




# # Použite oficiálny obraz Node.js s LTS verziou
# FROM node:lts-alpine AS development

# # Set the environment to development
# ENV NODE_ENV development

# # Vytvorenie priečinka pre frontend
# RUN mkdir -p /app/frontend
# WORKDIR /app/frontend

# # Kopírovanie package.json a package-lock.json pre frontend a inštalácia závislostí
# COPY frontend/package*.json ./
# RUN npm install

# # Kopírovanie zdrojových súborov pre frontend
# COPY frontend/ ./

# # Build frontend
# RUN npm run build

# # Vytvorenie priečinka pre backend
# RUN mkdir -p /app/backend
# WORKDIR /app/backend

# # Kopírovanie package.json a package-lock.json pre backend a inštalácia závislostí
# COPY backend/package*.json ./
# RUN npm install

# # Kopírovanie zdrojových súborov pre backend
# COPY backend/ ./

# # Build backend
# RUN npm run build

# # Vytvorenie priečinka pre root
# RUN mkdir -p /app/dist
# WORKDIR /app

# # Kopírovanie zvyšku projektu (ak je to potrebné)
# COPY . .

# # Build root priečinka
# RUN npm run build-root

# # EXPOSE 3000 3001

# # Príkaz pre spustenie aplikácie (ak je to potrebné)
# CMD ["npm", "start"]


# Príkaz pre spustenie aplikácie (ak je to potrebné)
# CMD ["npm", "start"]











# # Použití oficiálního image Node.js jako základ
# FROM node:lts-alpine

# # Pracovní adresář kontejneru
# WORKDIR /app

# # Kopírování package.json a package-lock.json pro frontend a instalace závislostí
# COPY frontend/package*.json ./frontend/
# RUN cd frontend && npm install

# # Kopírování package.json a package-lock.json pro backend a instalace závislostí
# COPY backend/package*.json ./backend/
# RUN cd backend && npm install

# # Kopírování zdrojových souborů pro frontend a backend
# COPY frontend/ ./frontend/
# COPY backend/ ./backend/

# # Exponování portů, na kterých běží frontend a backend

# # Spuštění backendu a frontendu
# # Příkaz pro spuštění aplikace
# RUN npm install
# CMD ["npm", "start"]


# # FROM node:lts-alpine AS build

# # # Pracovní adresář kontejneru
# # WORKDIR /

# # # Kopírování souborů pro backend a instalace závislostí
# # COPY backend/package.json backend/package-lock.json ./backend/
# # RUN cd backend && npm ci

# # # Kopírování souborů pro frontend a instalace závislostí



# # COPY frontend/package.json frontend/package-lock.json ./frontend/
# # RUN cd frontend && npm ci

# # # Kopírování zdrojových souborů pro backend a frontend
# # COPY backend/ ./backend/
# # COPY frontend/ ./frontend/

# # # Sestavení frontendu a backendu
# # RUN cd backend && npm run build
# # RUN cd frontend && npm run build

# # # Druhá fáze - kopírování výstupů do httpd image
# # FROM httpd:alpine
# # WORKDIR /usr/local/apache2/htdocs

# # # Kopírování statických souborů z fáze "build" frontendu
# # COPY --from=build /frontend/dist/ ./frontend/dist/

# # # Kopírování backendu do image
# # COPY --from=build /backend/dist ./backend/dist

# # # Nastavení oprávnění
# # RUN chown -R www-data:www-data /usr/local/apache2/htdocs
