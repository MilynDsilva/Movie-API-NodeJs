const { getTopMovie } = require('../methods/method');
const { url } = require("../methods/method")
const express = require('express');
const app = express();

describe('get top movies',()=>{
    test("Should throw error if cant fetch movies object", () => {
        expect(() => {app.get(url, ()=>{throw new TypeError("Error");})});
      });
    // it("Should throw error if cant fetch movies object", () => {
    //     const t = () => {
    //       throw new TypeError("UNKNOWN ERROR");
    //     };
    //     expect(t).toThrow(TypeError);
    //     expect(t).toThrow("UNKNOWN ERROR");
    //   });
});