const { expect } = require("chai");

const uuid = require("uuid");

const { jsToTerminator } = require("../../src/js_to_terminator");

describe.only("js_to_terminator.js", () => {
  describe("jsToTerminator()", () => {
    it("should convert to terminator format", () => {
      const input = require("../../static/input");
      const expected = [
        "[layouts]",
        "  [[default]]",
        "    [[[window]]]",
        "      type = Window",
        "      position = 0:0",
        "      size = 3840,2061",
      ].join("\n");

      const actual = jsToTerminator(input);

      expect(actual).to.deep.equal(expected);
    });
  });
});
