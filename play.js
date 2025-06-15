const { connect } = require('./client');

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;  
  stdin.setRawMode(true); 
  stdin.setEncoding("utf8"); 
  stdin.resume(); 
  stdin.on("data", handleUserInput); // when input recieved this should register the callback
  return stdin;   
};
//should exit game 
const  handleUserInput = function (key) {
  if (key === '\u0003') { 
    process.exit(); 
  }
}

setupInput();