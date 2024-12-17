#!/bin/bash

# Navigate to app-router, build and start
cd ./app-router && npm run dev &

# Navigate to backend-api, build and start
cd ./backend-api && npm run start:dev &

# Navigate to another-app, build and start
cd ./pages-router && npm run dev &

# Wait for all background processes to finish
wait
