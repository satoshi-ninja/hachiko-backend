# hachiko-backend
An Express backend for real-time blockchain monitoring.

## The problem we try to solve
Most bitcoin-derived cryptocurrency node servers integrate a set of JSON RPC calls.
Some of these calls are pretty useful to monitor and record statistics about the cryptocurrency node actual state.
However, trying to connect to the JSON RPC endpoint remotly, requires to transmit the RPC user and password accross a network.
Even on an encrypted connection this can represent a risk.

Hachiko-backend implements a REST API server layer in between your cryptocurrency node and anything else.

## Requirements
- A bitcoind or bitcoind-derived fully-synchronized with its blockchain cryptocurrency node.
- Install Node.js: https://nodejs.org.
- Install npm: https://www.npmjs.com.
- Install the required npm packages: ```npm install express bitcoin util```.

## Installation
- Clone the git repository: ```git clone https://github.com/satoshi-ninja/hachiko-backend.git```.
- Enter the hachiko-backend directory: ```cd hachiko-backend```.
- Configure hachiko-backend by editing ```app.js```; hachiko-backend needs at least the following information to run: RPC user of the node server, RPC password of the node server, IP address of the host on which the node server is running.
- Run hachiko-backend: ```nodejs app.js```.
