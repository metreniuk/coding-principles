import express from "express";
import { UserService } from "./service.js";
import { UserRepository } from "./repository.js";
import { EmailService } from "../email/service.js";

const router = express.Router();

// Dependency injection of modules.
const userRepository = new UserRepository();
const emailService = new EmailService(); // Uses SendGrid for email
const userService = new UserService(userRepository, emailService);

router.post("/", async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
