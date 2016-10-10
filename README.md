
# elm-select

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/elm-select.svg)](https://www.npmjs.com/package/elm-select) [![Downloads](https://img.shields.io/npm/dt/elm-select.svg)](https://www.npmjs.com/package/elm-select) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Select DOM elements and optionally call a function.

## :cloud: Installation

```sh
$ npm i --save elm-select
```


## :clipboard: Example



```js
const elmSelect = require("elm-select");

// Some examples
let myElm = elmSelect("#my-id")[0]
  , myElms = elmSelect(".some-class")
  ;

function foo(elm, some, args) {
    /*
     *  - elm is the current element
     *  ...and other arguments
     * */
}

// Take all the li elements from already selected element (#my-id)
let liElms = elmSelect("ul > li", foo, [2, 3], myElm);
```

## :memo: Documentation


### `elmSelect(elm, fn, args, parent)`
Select DOM elements and optionally call a function.

#### Params
- **String|Element|NodeList** `elm`: A stringified query selector, an element or a node list.
- **Function** `fn`: If this function is provided, it will be called with the current element and additional arguments passed in `args`.
- **Array** `args`: An array of arguments used in the `fn` function call (default: `[]`).
- **String|Element** `parent`: The parent element where to search the elements (default: `document`). This makes sense only when a query selector is used.

#### Return
- **NodeList** A node list containing the selected elements.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`crossy`](https://github.com/IonicaBizau/crossy.js)—Modify cross-browser CSS properties with one JavaScript call.
 - [`css-cross-transform`](https://github.com/IonicaBizau/css.cross-transform.js)—Modify CSS transform properties with one JavaScript call.
 - [`donate.js`](https://github.com/IonicaBizau/donate.js)—A JavaScript library for creating a friendly way to send money donations.
 - [`match`](https://github.com/IonicaBizau/match.js#readme)—Simplest way to create match memory games.
 - [`showalicense.com`](https://github.com/IonicaBizau/showalicense.com#readme)—A site to provide an easy way to show licenses and their human-readable explanations.
 - [`timer-app`](https://github.com/IonicaBizau/timer-app#readme)—A simple timer application.
 - [`validate5`](https://github.com/IonicaBizau/validate5#readme)—Form validations made easy.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
