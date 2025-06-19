const { connect } = require("./client"); 
const { setupInput } = require("./input");

console.log("Connecting ...");//Informs player server is connecting 

const connection = connect();//Establish connection to server
// Set up user input and pass the connection to it
setupInput(connection);
