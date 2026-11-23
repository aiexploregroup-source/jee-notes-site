@echo off
cd /d "%~dp0"
echo Starting JEE Notes site at http://localhost:5173/jee-notes-site/
start "" http://localhost:5173/jee-notes-site/
node server.mjs
