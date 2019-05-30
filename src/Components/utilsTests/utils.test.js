const utilsFuncs = require("./utils");

describe("utils Functions", () => {
  // describe('handleInput', () => {
  //     it('Should change the value of the input', () => {
  //         expect();
  //     })
  // })
  describe("getFeatured", () => {
    it("shpild return list of Featured schools", () => {
      sinon.stub(axios, "get").returns(
        expect({
          data: {
            results: []
          }
        })
      );
      return utils.getFeatured().then(Schools => {
        expect(Schools.length).toEqual(12);
      });
    });
  });
});
