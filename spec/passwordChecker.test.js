const PasswordValidator = require('../src/passwordChecker');

describe("Password validation tests", function() {
  let validator = new PasswordValidator();

  // --------------------  STEP 1 : Minimum Length --------------------

  it("PasswordValidator should return false for a password with less than 8 characters", function() {
    const result = validator.hasMinimumLength("Abc1");
    expect(result).toBe(false); // Moins de 8 caractères
  });

  it("PasswordValidator should return true for a password with exactly 8 characters", function() {
    const result = validator.hasMinimumLength("Abcdef12");
    expect(result).toBe(true); // Exactement 8 caractères
  });

  it("PasswordValidator should return true for a password with more than 8 characters", function() {
    const result = validator.hasMinimumLength("ValidPassword123");
    expect(result).toBe(true); // Plus de 8 caractères
  });

  // --------------------  STEP 2 : Special Character --------------------

  it("PasswordValidator should return false for a password without a special character", function() {
    const result = validator.hasSpecialCharacter("Valid123");
    expect(result).toBe(false); // Pas de caractère spécial
  });

  it("PasswordValidator should return true for a password with at least one special character", function() {
    const result = validator.hasSpecialCharacter("Valid@123");
    expect(result).toBe(true); // Contient un caractère spécial
  });

  it("PasswordValidator should return false for a password without a special character", function() {
    const result = validator.hasSpecialCharacter("NoSpecialCharacter123");
    expect(result).toBe(false); // Pas de caractère spécial
  });

});
