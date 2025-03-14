import db from "db";

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
    db.save(user);
    return user;
  }
}

export { UserRepository };
