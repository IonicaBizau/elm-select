"use strict";

const elmSelect = require("../lib");

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
