const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const { connectDb } = require("./config/connectDb");
const libraryEnter = require("./controller/libraryEnter");
const libraryExit = require("./controller/libraryExit");
const getAllLogs = require("./controller/logs");

// Bodyparser Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Connect MongoDB
connectDb({ mongoUri: process.env.MONGO_URI });

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is up and running...");
});

app.post("/api/enter", libraryEnter);

app.post("/api/exit", libraryExit);

app.get("/api/logs", getAllLogs);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
