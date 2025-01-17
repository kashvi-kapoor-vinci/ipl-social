const validatePassword = require('../src/passwordChecker');

describe('validatePassword', () => {
  it('should return true for a valid password', () => {

    expect(validatePassword('Valid@123')).toBe(true);
  });
});
