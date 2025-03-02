// @ts-ignore
import sgMail from "@sendgrid/mail";

type User = {
  email: string;
  name: string;
};

interface EmailService {
  init(): void;
  sendWelcomeEmail(user: User): Promise<{ success?: boolean; error?: string }>;
}

class SendGringEmailService implements EmailService {
  init() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendWelcomeEmail(
    user: User
  ): Promise<{ success?: boolean; error?: string }> {
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
      return { success: true };
    } catch (error) {
      console.error("Error sending email", error);
      return { error: "Email sending failed" };
    }
  }
}

class UserService {
  emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
    this.emailService.init();
  }
  async onUserCreate(user: User) {
    await this.emailService.sendWelcomeEmail(user);
    return user;
  }
}

const emailService = new SendGringEmailService();
const userService = new UserService(emailService);
