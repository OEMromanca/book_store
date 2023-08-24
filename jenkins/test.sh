#!/bin/bash
echo "Current directory: $(pwd)"

# Prejdite do priečinku frontend a spustite testy
cd frontend
npm install
npm test

# Vráťte sa do koreňového priečinka
cd ..

# Prejdite do priečinku backend a spustite testy
cd backend
npm install
npm test


