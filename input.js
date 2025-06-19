let connection;

// Handle keyboard input from the user
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Exit on Ctrl+C
  }

  // Movement commands
  if (key === 'w') connection.write("Move: up");
  if (key === 'a') connection.write("Move: left");
  if (key === 's') connection.write("Move: down");
  if (key === 'd') connection.write("Move: right");

  // Messages
  if (key === 'z') connection.write("Say: Hello world");
  if (key === 'x') connection.write("Say: I'm super fast!");
};

// Setup stdin and bind the input handler
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };


