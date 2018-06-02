# Terminator Config in NodeJS

A utility for generating a terminator config from JSON or Javascript.

## Example:

In javascript:

```js
require("terminator_config").jsToTerminator({
  layouts: {
    default: {
      window: {
        type: "Window",
        position: "0:0",
        size: "3840,2061",
      },
    },
  },
});
```

The above code generates

```
[layouts]
  [[default]]
    [[[window]]]
      type = Window
      position = 0:0
      size = 3840,2061
```

On the command line (using yarn):

```bash
yarn js_to_terminator --input=path/to/input.js
```
