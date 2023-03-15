let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http, {
  cors: {
    'Access-Control-Allow-Origin': "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", socket => {
  // Log whenever a user connects
  console.log("user connected");

  let i = 0;
  const interval = setInterval(() => {
    if(i >= 5){
      i = 0;
    }
    io.emit("message", { status: i++, battery: 50 - 2*i});
  }, 3000);

  // Log whenever a client disconnects from our websocket server
  socket.on("disconnect", function() {
    console.log("user disconnected");
    clearInterval(interval);
  });

  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`
  socket.on("message", message => {
    console.log("Message Received: " + message);
    io.emit("message", { type: "new-message", text: message });
  });
});

// Initialize our websocket server on port 8080
http.listen(5001, () => {
  console.log("started on port 5001");
});
