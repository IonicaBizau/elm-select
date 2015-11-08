# elm-select [![Support this project][donate-now]][paypal-donations]
Select DOM elements and optionally call a function.

## Installation

```sh
$ npm i elm-select
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

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md