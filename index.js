require("dotenv").config(); // 🔥 Must be first!
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("./db"); // Connects to MongoDB

const app = express();
const routes = require("./routes/app");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use routes
app.use("/", routes);

const PORT = 3000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`🚗 Server is running at http://localhost:${PORT}`);
});
