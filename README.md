Full Metal Packet Demo
=========================

![alt text](https://jwparsons.bitbucket.io/style/images/projects/fullmetalpacket/title.png "Full Metal Packet Title")

## Introduction
This repository contains the source code for Full Metal Packet, an encrypted multiplayer video game.
You can also take a look at the [source code](https://github.com/jwparsons/FullMetalPacket) and [game server](https://github.com/jwparsons/FullMetalPacket_Server).
It should be noted that this repository also contains the server code.


## Requirements
* Running the client executable requires Windows.
* Running the server requires [NodeJS](https://nodejs.org/en/).


## Instructions
1. Clone the repository.
1. Navigate to the **Server** directory with Command Prompt (A).
    * Run the command **npm install** to install dependencies.
    * Run the command **node index** to start the unsecure server.
1. Navigate to the **FullMetalPacket** directory.
    * Run the executable **FullMetalPacket.exe**.
    * Press **Play**.
    * Choose a name and press **Join**.
    * Repeat to add more players.
1. Navigate to the **Server** directory with a new instance of Command Prompt (B).
    * Run the command **node hack**.
    * Enter the name you chose in the previous step.
1. In Command Prompt (A), kill the unsecure server with ctrl+C.
    * Run the command **node secure** to start the secure server.
1. Repeat Step 4 with Command Prompt (B).
1. Enjoy!


## Demo
[![FullMetalPacket Demo](https://jwparsons.bitbucket.io/style/images/projects/rebound/rebound_repo_tn.png)](https://vimeo.com/2751733284 "FullMetalPacket Demo - click to watch!")


## Contribution
This project was created by me and [Manuel Hernandez](https://github.com/manmx) for the class Network Security at FSU.
I was responsible for game design, artwork, UI, and mechanics.

Enjoy!