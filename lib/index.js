"use strict";

const typpy = require("typpy");

/**
 * elmSelect
 * Select DOM elements and optionally call a function.
 *
 * @name elmSelect
 * @function
 * @param {String|Element|NodeList} elm A stringified query selector, an element or a node list.
 * @param {Function} fn If this function is provided, it will be called with the current element and additional arguments passed in `args`.
 * @param {Array} args An array of arguments used in the `fn` function call (default: `[]`).
 * @param {String|Element} parent The parent element where to search the elements (default: `document`). This makes sense only when a query selector is used.
 * @return {NodeList} A node list containing the selected elements.
 */
function elmSelect(elm, fn, args, parent) {

    // Handle the query selectors
    if (typeof elm === "string") {
        parent = typeof parent === "string" ? elmSelect(parent, null, null, document)[0] : parent;
        if (!parent) throw new Error("Cannot find the parent element.");
        elm = parent.querySelectorAll(elm);
    }

    // Check if the input is a nodelist
    if (!typpy(elm, NodeList) && !typpy(elm, HTMLCollection)) {
        elm = [elm];
    }

    // Handle the function call
    if (typeof fn === "function") {
        if (!Array.isArray(args)) {
            args = [args];
        }
        for (let i = 0; i < elm.length; ++i) {
            let _args = [elm[i]].concat(args);
            fn.apply(this, _args);
        }
    }

    return elm;
}

module.exports = elmSelect;
