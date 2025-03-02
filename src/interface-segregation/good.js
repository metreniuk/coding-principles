import express from "express";

const router = express.Router();

// Define only the routes that are needed.
router.get("/resource", (req, res) => {
  res.send("GET handler for resource");
});

router.post("/resource", (req, res) => {
  res.send("POST handler for resource");
});
