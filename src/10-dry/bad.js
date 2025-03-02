// app-bad.js
import express from "express";
const app = express();

app.get("/dashboard", (req, res) => {
  const token = req.headers["authorization"];
  if (!token || token !== "secret-token") {
    return res.status(401).send("Unauthorized");
  }
  res.send("Dashboard Data");
});

app.post("/profile", (req, res) => {
  const token = req.headers["authorization"];
  if (!token || token !== "secret-token") {
    return res.status(401).send("Unauthorized");
  }
  res.send("Profile Updated");
});

app.get("/settings", (req, res) => {
  const token = req.headers["authorization"];
  if (!token || token !== "secret-token") {
    return res.status(401).send("Unauthorized");
  }
  res.send("Settings Data");
});

app.listen(3002, () => console.log("Server running on port 3002"));
