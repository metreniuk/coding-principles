// anti-coupling.js
import express from "express";
import bodyParser from "body-parser";
import sgMail from "@sendgrid/mail";
import db from "db";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
analyticsClient.init();

const app = express();
app.use(bodyParser.json());

app.post("/users", async (req, res) => {
  // Inline validation
  if (!req.body.email || !req.body.name) {
    return res.status(400).json({ error: "Missing email or name" });
  }
  // Inline persistence (simulate in-memory save)
  const user = { id: Date.now(), ...req.body };

  db.save(user);

  // Inline email sending logic
  const msg = {
    to: user.email,
    from: "welcome@yourapp.com",
    subject: "Welcome!",
    text: `Hi ${user.name}, welcome to our app!`,
    html: `<strong>Hi ${user.name}, welcome to our app!</strong>`,
  };
  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${user.email}`);
  } catch (error) {
    console.error("Error sending email", error);
    return res.status(500).json({ error: "Email sending failed" });
  }

  res.status(201).json(user);
});

app.listen(3000, () => console.log("Server running on port 3000"));
