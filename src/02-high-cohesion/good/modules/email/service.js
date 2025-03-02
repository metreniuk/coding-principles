import sgMail from "@sendgrid/mail";

class EmailService {
  constructor(analyticsService) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendWelcomeEmail() {
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
  }
}

export { EmailService };
