#!/usr/bin/env node

const minimist = require("minimist");
const path = require("path");

const argv = minimist(process.argv.slice(2));

const { jsToTerminator } = require("../src/js_to_terminator");

const usage = () => {
  console.error(
    [
      "Usage:",
      `  ${process.argv[1]} --input=path/to/input.js`,
      `  ${process.argv[1]} --input=path/to/input.json`,
    ].join("\n")
  );
};

if (!argv.input) {
  console.error("No input argument was provided");
  usage();

  process.exit(-1);
}

const input = path.resolve(argv.input);

console.log(jsToTerminator(require(input)));
