const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,     // uses constants.js IP
    port: PORT    // Uses constants.js PORT
  });

  conn.setEncoding("utf8");

  // When the client successfully connects to the server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // send initials to the server
    conn.write("Name: JB"); // Replace 'JS' with your actual initials

  });

  // Listens for messages from the server
  conn.on("data", (message) => {
    console.log("Server says:", message);
  });

  return conn;
};

module.exports = { connect };

