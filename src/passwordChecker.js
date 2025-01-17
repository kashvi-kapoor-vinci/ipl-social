class PasswordValidator {

    validate(password) {
        const hasMinLength = this.hasMinimumLength(password);
        const hasSpecialChar = this.hasSpecialCharacter(password);
        const hasNumber = this.hasNumber(password);
        const containsIpl = this.containsIPL(password);
        
        return hasMinLength && (hasSpecialChar || hasNumber) && !containsIpl;
      }
    
  
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