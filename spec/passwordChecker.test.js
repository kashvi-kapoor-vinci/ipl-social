const validatePassword = require('../src/passwordChecker');

describe('validatePassword', () => {
  it('should return true for a password with at least 8 characters ', () => {
    expect(validatePassword('Valid1234')).toBe(true);
  });


  it('should return false for a password less than 8 characters', () => {
    expect(validatePassword('Abc1')).toBe(false);
  });
});

