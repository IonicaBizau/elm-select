# elm-select [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/elm-select.svg)](https://www.npmjs.com/package/elm-select) [![Downloads](https://img.shields.io/npm/dt/elm-select.svg)](https://www.npmjs.com/package/elm-select) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Select DOM elements and optionally call a function.

## Installation

```sh
$ npm i --save elm-select
```

## Example

```js
// Dependencies
var ElmSelect = require("elm-select");

// Some examples
var myElm = ElmSelect("#my-id")[0]
  , myElms = ElmSelect(".some-class")
  ;

function foo(elm, some, args) {
    /*
     *  - elm is the current element
     *  ...and other arguments
     * */
}

// Take all the li elements from already selected element (#my-id)
var liElms = ElmSelect("ul > li", foo, [2, 3], myElm);
```

## Documentation

### `ElmSelect(elm, fn, args, parent)`
Select DOM elements and optionally call a function.

#### Params
- **String|Element|NodeList** `elm`: A stringified query selector, an element or a node list.
- **Function** `fn`: If this function is provided, it will be called with the current element and additional arguments passed in `args`.
- **Array** `args`: An array of arguments used in the `fn` function call (default: `[]`).
- **String|Element** `parent`: The parent element where to search the elements (default: `document`). This makes sense only when a query selector is used.

#### Return
- **NodeList** A node list containing the selected elements.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`crossy`](https://github.com/IonicaBizau/crossy.js)

 - [`css-cross-transform`](https://github.com/IonicaBizau/css.cross-transform.js)

 - [`donate.js`](https://github.com/IonicaBizau/donate.js)

 - [`match`](https://github.com/IonicaBizau/match.js#readme)

 - [`showalicense.com`](https://github.com/IonicaBizau/showalicense.com#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md