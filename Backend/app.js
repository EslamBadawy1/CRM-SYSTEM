// Dotenv
require("dotenv").config();

//cros
const cors = require("cors");

// express
const express = require("express");
const app = express();

// http (for future socket use)
const http = require("http");
const server = http.createServer(app);

// logger
const morgan = require("morgan");

// json middleware
app.use(express.json());
app.use(cors());

// dev logger
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

// DB connection
const connectedDB = require("./config/db");
connectedDB();

// routes
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// server start
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
