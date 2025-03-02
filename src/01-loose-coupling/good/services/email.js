import sgMail from "@sendgrid/mail";

class EmailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendWelcomeEmail(email, name) {
    const msg = {
      to: email,
      from: "welcome@yourapp.com",
      subject: "Welcome!",
      text: `Hi ${name}, welcome to our app!`,
      html: `<strong>Hi ${name}, welcome to our app!</strong>`,
    };
    try {
      await sgMail.send(msg);
      console.log(`Email sent to ${email}`);
    } catch (error) {
      console.error("Error sending email", error);
      throw new Error("Failed to send welcome email");
    }
  }
}

export { EmailService };
