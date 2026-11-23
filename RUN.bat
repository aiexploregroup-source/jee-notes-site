@echo off
cd /d "%~dp0"
echo Starting JEE Notes site at http://localhost:5173/
start "" http://localhost:5173/
node server.mjs
