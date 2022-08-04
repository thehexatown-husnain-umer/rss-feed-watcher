let io;

module.exports = {
  init: (HttpServer) => {
    io = require("socket.io")(HttpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw {
        message: "Soceket.io not initilized",
      };
    }
    return io;
  },
};
