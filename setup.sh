#!/bin/bash

# Portfolio Installation Script
# Run this script to quickly set up your portfolio

echo "🚀 Portfolio Setup Script"
echo "========================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm found: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Check .env.local
echo ""
echo "🔑 Checking environment variables..."
if [ -f ".env.local" ]; then
    echo "✅ .env.local file exists"
else
    echo "⚠️  .env.local file not found"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Customize the content in the components/ folder"
echo "4. Deploy to Vercel: npm i -g vercel && vercel"
echo ""
echo "For more info, see README.md or SETUP_GUIDE.md"
