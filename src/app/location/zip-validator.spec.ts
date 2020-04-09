import { ZipValidator } from './zip-validator';

describe('ZipValidator', () => {
  let validator: ZipValidator;

  beforeEach(() => {
    validator = new ZipValidator();
  });

  it('should create an instance', () => {
    expect(new ZipValidator()).toBeTruthy();
  });

  describe('zip length', () => {
    it('should not allow zips with less than 5 digits', () => {
      const zip = '333';
      const actual = validator.isValid(zip);
      expect(actual).toBe(false);
    });
    it('should allow zips with 5 digits', () => {
      const zip = '33333';
      const actual = validator.isValid(zip);
      expect(actual).toBe(true);
    });
    it('should not allow zips with more than 5 digits', () => {
      const zip = '8888888';
      const actual = validator.isValid(zip);
      expect(actual).toBe(false);
    });
  });

});
