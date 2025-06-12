#!/data/data/com.termux/files/usr/bin/bash

echo "📦 Memulai instalasi dependencies..."
pkg update -y && pkg install nodejs -y

echo "📁 Memasang module NPM..."
npm install

echo "🚀 Menjalankan bot..."
npm start
