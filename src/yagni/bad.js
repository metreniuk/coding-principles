function greetUser(user, language = "en") {
  if (language === "en") return `Hello, ${user.name}!`;
  else if (language === "es") return `¡Hola, ${user.name}!`;
  else if (language === "fr") return `Bonjour, ${user.name}!`;
  // ... anticipating other languages, but not needed now
}
