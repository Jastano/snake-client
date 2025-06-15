# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here.](https://github.com/lighthouse-labs/snek-multiplayer.git) 


# Getting Started



### 1. Run the Game Server

The server manages game and multiplayer connections. You need to run it first.

- Clone the server repo:

  ```bash
  git clone https://github.com/lighthouse-labs/snek-multiplayer.git
  cd snek-multiplayer
  npm install
  npm run play

### 2. Run the Snake Client

  In a seperate terminal, run: 
  ```bash
  node play.js

```
### 3. Play the game!
  Interact with the game using :  
        w => Move up  
  a => Move left  
    s => Move down  
  d => Move right   
  x => Send chat "Im super fast!"   
  z => Send chat "Hello world"  
  ctrl + c => Exit game 

  ## Troubleshooting
- If the client fails to connect, ensure the server is running and that IP and PORT in constants.js match the server configuration *(this client requires the official snek multiplayer server running locally at localhost:50541)*

- Use ctrl + c to quit the game