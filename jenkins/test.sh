#!/usr/bin/env sh
#!/bin/bash

# Spustenie testov pre backend v priečinku 'backend'
cd backend
npm install
npm test

# Spustenie testov pre frontend v priečinku 'frontend'
cd frontend
npm install
npm test

