// app-good.js
import express from "express";

const app = express();

// Reusable authentication middleware
function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    if (token !== "secret-token") {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Could add token verification, user lookup, etc.
    next();
  } catch (error) {
    res.status(500).json({ error: "Authentication failed" });
  }
}

// Apply authentication to all routes
app.use(authMiddleware);

// Route handlers can focus on their specific logic
app.get("/dashboard", (req, res) => {
  try {
    res.json({ data: "Dashboard Data" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch dashboard data" });
  }
});

app.post("/profile", (req, res) => {
  try {
    res.json({ message: "Profile Updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update profile" });
  }
});

app.get("/settings", (req, res) => {
  try {
    res.json({ data: "Settings Data" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch settings" });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export { app, authMiddleware };
