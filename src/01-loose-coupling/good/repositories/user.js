class UserRepository {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }
  async save(userData) {
    if (!userData.email || !userData.name) {
      throw new Error("User data incomplete");
    }
    const user = { id: this.nextId++, ...userData };
    this.users.push(user);
    return user;
  }
}

export { UserRepository };
