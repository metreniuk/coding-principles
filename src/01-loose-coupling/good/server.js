// server.js
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
