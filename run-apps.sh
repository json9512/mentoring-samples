#!/bin/bash

# Navigate to app-router, build and start
cd ./app-router && npm run build && npm run start &
cd -

# Navigate to backend-api, build and start
cd ./backend-api && npm run build && npm run start &
cd -

# Navigate to another-app, build and start
cd ./pages-router && npm run build && npm run start &
cd -

# Wait for all background processes to finish
wait
