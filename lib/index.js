function ElmSelect(elm, fn, args) {
    var i = 0;
    if (typeof elm === "string") {
        elm = document.querySelectorAll(elm);
    }

    if (elm.constructor !== NodeList) {
        elm = [elm];
    }

    if (typeof fn === "function") {
        if (!Array.isArray(args)) {
            args = [args];
        }
        fn.apply(this, [elm].concat(args));
    }

    return elm;
}

module.exports = ElmSelect;
