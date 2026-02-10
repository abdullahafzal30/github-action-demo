#!/bin/bash

echo "🧪 Website test start..."

if grep -q "<html>" index.html; then
  echo "✅ Test passed: HTML tag found"
else
  echo "❌ Test failed: <html> tag missing"
  exit 1
fi

