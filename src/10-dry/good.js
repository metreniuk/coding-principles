// app-good.js
const express = require("express");
const app = express();

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (!token || token !== "secret-token") {
    return res.status(401).send("Unauthorized");
  }
  next();
}

app.use(authMiddleware);

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Data");
});

app.post("/profile", (req, res) => {
  res.send("Profile Updated");
});

app.get("/settings", (req, res) => {
  res.send("Settings Data");
});

app.listen(3002, () => console.log("Server running on port 3002"));
