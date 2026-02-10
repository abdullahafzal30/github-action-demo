#!/bin/bash
set -e

echo "🧪 Running React build test..."

npm install
npm run build

if [ -d "dist" ]; then
  echo "✅ Build successful: dist folder found"
else
  echo "❌ Build failed"
  exit 1
fi
