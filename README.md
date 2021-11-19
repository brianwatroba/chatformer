# Chat Jump

#### Chat-based jumper platform game for Twitch streamers to play with their chat

### How to run locally:

1. Clone project
1. Run "npm i" in root directory, then cd into "client" and run "npm i" again
1. Run script "npm run dev" to start dev server. This starts both the server and client dev servers simultaneously. Client = port 3000, server = port 5000.

### Notes about project structure:

1. Server code is at root, client is in client directory
1. Client directory houses both React front end (root > client > src) and all Phaser code (root > client > src > phaser)
1. All assets (sprites, images, html snippets, etc.) are in the public directory (root > client > public)
