//import * as lib from "./dist/src/index"

const lib = require("./index")

describe('Environment', () => {

    it('Environment check', () => {
      expect(lib.Environment()).not.toEqual(undefined);
      console.log(lib);
    });
  });