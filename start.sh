#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1
echo "Starting JEE Notes site at http://localhost:5173/"
node server.mjs
