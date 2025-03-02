// @ts-ignore
import sgMail from "@sendgrid/mail";

type User = {
  email: string;
  name: string;
};

interface EmailService {
  init(): void;
  sendWelcomeEmail(user: User): Promise<EmailResult>;
}

type EmailResult = {
  success: boolean;
  error?: string;
};

class SendGridEmailService implements EmailService {
  init(): void {
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error("SendGrid API key is required");
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendWelcomeEmail(user: User): Promise<EmailResult> {
    if (!user?.email || !user?.name) {
      return { success: false, error: "Invalid user data" };
    }

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
      return { success: false, error: "Email sending failed" };
    }
  }
}

class UserService {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
    this.emailService.init();
  }

  async onUserCreate(user: User): Promise<User> {
    const result = await this.emailService.sendWelcomeEmail(user);
    if (!result.success) {
      throw new Error(result.error || "Failed to send welcome email");
    }
    return user;
  }
}

// Example usage
const emailService = new SendGridEmailService();
const userService = new UserService(emailService);

export type { User, EmailService, EmailResult };
export { SendGridEmailService, UserService };
