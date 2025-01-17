class PasswordValidator {
  
    hasMinimumLength(password) {
      return password.length >= 8;
    }
  
    hasSpecialCharacter(password) {
      const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
      return specialCharPattern.test(password);
    }

    hasNumber(password) {
    const numberPattern = /\d/; 
    return numberPattern.test(password);
    }

    containsIPL(password) {
    const regex = /ipl/i;
    return regex.test(password);
    }
  }

  module.exports = PasswordValidator;