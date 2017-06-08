# Frames

Frames is a simple helper function that creates a pre-configured iframe and
appends it to the given DOM element while providing a nice API for interacting
with the iframe.

This module assumes that it's used by a Node.js compatible module system.

## Installation

```
npm install frames --save
```

## Usage

The reason why we've decided to go with methods that exposes the properties vs
just exposing a `document` and `window` property is that these values and their
references change when you remove and add the iframe back in the DOM.

There are 2 requirement arguments when you create a new iframe:

1. The parentNode where the iframe should be appended to.
2. A unique id for the iframe. This id will also be used for the `name`
   attribute.

The third argument is the options argument which can be used to configure:

- `visible`: This hides the iframe by giving it a display none and positions it
  outside the document using absolute positioning. Defaults to `true`
- `sandbox`: These values are used to set the `sandbox` attribute on the iframe.
  It defaults to: `[allow-pointer-loc, allow-same-origin, allow-scripts, allow,
  popups, allow-forms]`

The module exposed as single function, so it can be used like this:

```js
'use strict';

var iframe = require('frames');

//
// Create a new iframe and add which will be added to the `document.body`
//
var frame = iframe(document.body, 'foo_'+ Date.now());
```

The following methods are exposed on the returned object:

### frame.document()

The `document` method returns the `document` of the created iframe. This can be
used to inject elements in the HTML of the iframe.

### frame.window()

The `window` method can be used to return the `window` or `global` of the
iframe. This allows you to introduce new variables in the iframe as well as see
which globals are exposed within the iframe.

### frame.add()

Adds the `iframe` element to initially supplied parentNode. It will only add the
element if it wasn't already in the DOM.

### frame.remove()

Remove the `iframe` element from the parentNode. This causes the iframe to
trigger an `unload` event in the browsers that support it. (Basically every
browser except older Opera browsers).

### frame.attached()

Check if the `iframe` has been added to the parentNode.

### frame.frame

Reference to the created DOM node, which can be used for all other kinds of
interactions.

## License

MIT
