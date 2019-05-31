const utils = require("./utils");
const axios = require('axios');
const sinon = require('sinon');
describe("utils Functions", () => {
  // describe('handleInput', () => {
  //     it('Should change the value of the input', () => {
  //         expect();
  //     })
  // })
  describe("getFeatured", () => {
    it("should return list of Featured schools", () => {
      sinon.stub(axios, "get").returns(Promise.resolve({
          data: {
              pizza: []
            }
        }));
      return utils.getFeatured().then(Schools => {
        expect(Schools.length).toEqual(0);
      });
    });
  });
});
