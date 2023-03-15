let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http, {
  cors: {
    'Access-Control-Allow-Origin': "*",
    methods: ["GET", "POST"]
  }

  // handlePreflightRequest: (req, res) => {
  //   const headers = {
  //       "Access-Control-Allow-Headers": "Content-Type, Authorization",
  //       "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
  //       "Access-Control-Allow-Credentials": true
  //   };
  //   res.writeHead(200, headers);
  //   res.end();
  // }

  // allowRequest: (req, callback) => {
  //   const noOriginHeader = req.headers.origin === undefined;
  //   callback(null, noOriginHeader);
  // }
});

// io.origins((origin, callback) => {
//   callback(null, true);
// });

io.on("connection", socket => {
  // Log whenever a user connects
  console.log("user connected");

  // Log whenever a client disconnects from our websocket server
  socket.on("disconnect", function() {
    console.log("user disconnected");
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
