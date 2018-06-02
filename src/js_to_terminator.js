const input = require("../static/input.js");

const util = require("util");

const IND = "  ";

const r = value => indentations => value.repeat(indentations);

const indent = indentations => value => r(IND)(indentations) + value;

const tBrackets = value => indentations =>
  r("[")(indentations + 1) + value + r("]")(indentations + 1);

const jsToTerminator = (obj, indentations = 0) =>
  Object.keys(obj)
    .map(key => {
      let val = obj[key];

      const type = typeof val;

      let indented;

      if (type === "object") {
        indented = indent(indentations)(tBrackets(key)(indentations));
        val = jsToTerminator(val, indentations + 1);
        indented = [indented].concat(val).join("\n");
      } else {
        indented = indent(indentations)(`${key} = ${val}`);
      }

      return indented;
    })
    .join("\n");

module.exports = {
  jsToTerminator,
};
