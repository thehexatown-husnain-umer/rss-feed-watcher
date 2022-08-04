require("dotenv").config();
const cors = require("cors");
const express = require("express");
let Watcher = require("feed-watcher");
const app = express();
const http = require("http").Server(app);
const io = require("./socket.js").init(http);
const Router = require("./src/route/upWork");
const UpWorkService = require("./src/services/upWork.service");
const connectDB = require("./config/db");

//Db_connection
connectDB();

app.use(cors());
app.use(express.json());

//routes
app.use("/", Router);

io.on("connection", (socket) => {
  //socket events in this
});

feed =
  "https://www.upwork.com/ab/feed/topics/rss?securityToken=507d21b1595f30bf0495810d21e6298b306775f7bf40729eccb8c0209d37016d844b56e940d0b5fe43af0c5c45059f46ca407911782ac99265a17f7ecfda33b4&userUid=986510802591121408&orgUid=986510802595315713";

interval = 10; // seconds

let watcher = new Watcher(feed, interval);
const newEntries = [];
watcher.on("new entries", (entries) => {
  entries.forEach((entry) => {
    console.log(entry.title);
    newEntries.push(entry);
  });
  UpWorkService.insertEntries(newEntries);
  io.emit("new entries", entries);
});

watcher
  .start()
  .then((entries) => {
    console.log("running");
  })
  .catch(function (error) {
    console.error(error);
  });

watcher.stop();

const PORT = process.env.PORT || 5000;

const server = http.listen(PORT, () =>
  console.log(`server is runing on PORT ${PORT}...`)
);

module.exports = server;
