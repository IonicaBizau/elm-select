## Documentation

You can see below the API reference of this module.

### `elmSelect(elm, fn, args, parent)`
Select DOM elements and optionally call a function.

#### Params

- **String|Element|NodeList** `elm`: A stringified query selector, an element or a node list.
- **Function** `fn`: If this function is provided, it will be called with the current element and additional arguments passed in `args`.
- **Array** `args`: An array of arguments used in the `fn` function call (default: `[]`).
- **String|Element** `parent`: The parent element where to search the elements (default: `document`). This makes sense only when a query selector is used.

#### Return
- **NodeList** A node list containing the selected elements.

