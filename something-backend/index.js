const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connection = require("./config/db");
const userRoute = require("./routes/users");

const app = express();

app.use(cors());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use("/api/users", userRoute);


app.get("/health", (req, res) => res.json({ message: "running fine" }));

const server = http.createServer(app);

const io = new Server(server, {
  cors:{
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("recieve_message", data)
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });

});

server.listen(3001, () => {
  console.log("CHAT SERVER IS RUNNING");
})

connection.then(() => {
  app.listen(5000, () => {
    console.log("Backend Server running");
  });
});
