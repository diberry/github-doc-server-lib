import { Environment } from '../src/index';

describe('Environment', () => {

    it('Environment check', () => {
      const env = Environment()
      expect(env).not.toEqual(undefined);
      console.log(env);
    });
  });