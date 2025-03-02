class UserService {
  constructor(userRepository, emailService) {
    this.userRepository = userRepository;
    this.emailService = emailService;
  }
  async createUser(userData) {
    // (Optional) Validate userData…
    const user = await this.userRepository.save(userData);
    // Send welcome email using the injected email service.
    await this.emailService.sendWelcomeEmail(user.email, user.name);
    return user;
  }
}

export { UserService };
