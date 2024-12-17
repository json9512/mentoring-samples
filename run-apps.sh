#!/bin/bash

# Navigate to app-router, build and start
cd ./app-router && npm run build && npm run start &

# Navigate to backend-api, build and start
cd ./backend-api && npm run build && npm run start &

# Navigate to another-app, build and start
cd ./pages-router && npm run build && npm run start &

# Wait for all background processes to finish
wait
