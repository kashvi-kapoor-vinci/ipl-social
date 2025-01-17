class PasswordValidator {
  
    // Vérifie si le mot de passe a au moins 8 caractères
    hasMinimumLength(password) {
      return password.length >= 8;
    }
  
    // Vérifie si le mot de passe contient au moins un caractère spécial
    hasSpecialCharacter(password) {
      const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
      return specialCharPattern.test(password);
    }
  }

  module.exports = PasswordValidator;