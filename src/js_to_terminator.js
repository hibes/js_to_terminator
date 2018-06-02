const input = require("../static/input.js");

const util = require("util");

const IND = "  ";

const r = v => i => v.repeat(i);

const indent = i => v => r(IND)(i) + v;

const tBrackets = v => i => r("[")(i + 1) + v + r("]")(i + 1);

const jsToTerminator = (obj, i = 0) =>
  Object.keys(obj)
    .map(key => {
      let val = obj[key];

      const type = typeof val;

      let indented;

      if (type === "object") {
        indented = indent(i)(tBrackets(key)(i));
        val = jsToTerminator(val, i + 1);
        indented = [indented].concat(val).join("\n");
      } else {
        indented = indent(i)(`${key} = ${val}`);
      }

      return indented;
    })
    .join("\n");

module.exports = {
  jsToTerminator,
};
