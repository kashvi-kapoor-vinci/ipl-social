const PasswordValidator = require('../src/passwordChecker');

describe("Password validation tests", function() {
  let validator = new PasswordValidator();

  // --------------------  STEP 1 : Minimum Length --------------------

  it("PasswordValidator should return false for a password with less than 8 characters", function() {

    const result = validator.hasMinimumLength("Abc1");

    expect(result).toBe(false);
  });

  it("PasswordValidator should return true for a password with exactly 8 characters", function() {

    const result = validator.hasMinimumLength("Abcdef12");

    expect(result).toBe(true);
  });

  it("PasswordValidator should return true for a password with more than 8 characters", function() {

    const result = validator.hasMinimumLength("ValidPassword123");

    expect(result).toBe(true); 
  });

  // --------------------  STEP 2 : Special Character --------------------

  it("PasswordValidator should return false for a password without a special character", function() {

    const result = validator.hasSpecialCharacter("Valid123");

    expect(result).toBe(false);
  });

  it("PasswordValidator should return true for a password with at least one special character", function() {

    const result = validator.hasSpecialCharacter("Valid@123");

    expect(result).toBe(true); 
  });

  it("PasswordValidator should return false for a password without a special character", function() {

    const result = validator.hasSpecialCharacter("NoSpecialCharacter123");
    
    expect(result).toBe(false);
  });


// --------------------  STEP 3 : Number Check  --------------------

it("PasswordValidator should return true for a password with at least one digit", function() {

  const result = validator.hasNumber("Password123");

  expect(result).toBe(true);
});

it("PasswordValidator should return false for a password with no digits", function() {
  
  const result = validator.hasNumber("Password");

  expect(result).toBe(false);
});

it("PasswordValidator should return true for a password with exactly one digit", function() {

  const result = validator.hasNumber("Passw0rd");

  expect(result).toBe(true);
});

// --------------------  STEP 4 : IPL Check -------------------
it("PasswordValidator should return false if the password contains 'IPL' (uppercase)", function() {
  const result = validator.containsIPL("IPl1234");
  expect(result).toBe(true); // Contient 'IPL' (majuscule)
});

it("PasswordValidator should return false if the password contains 'ipl' (lowercase)", function() {
  const result = validator.containsIPL("ipl1234");
  expect(result).toBe(true); // Contient 'ipl' (minuscule)
});

it("PasswordValidator should return false if the password contains 'IpL' (mixed case)", function() {
  const result = validator.containsIPL("1234");
  expect(result).toBe(false); // Contient 'IpL' (mixtes majuscules et minuscules)
});

});
