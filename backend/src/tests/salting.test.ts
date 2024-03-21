import { authentication, random } from '../helpers/index';

describe('Salting', () => {
  let salt: string;
  let salt2: string;
  let password: string;

  beforeEach(() => {
    salt = random();
    salt2 = random();
    password = 'testPassword';
  });

  test('authentication function should return different results for same password', () => {
    const result1 = authentication(salt, password);
    const result2 = authentication(salt2, password);
    expect(result1).not.toBe(result2);
  });
});