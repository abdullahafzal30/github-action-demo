#!/bin/bash
set -e

echo "Building app..."
npm run build

echo "Deploying..."
docker build -t react-cicd-app .
docker run -d -p 8080:80 react-cicd-app

echo "Deployment successful 🚀"
