
[![cb-buffer](http://i.imgur.com/UjN9LfL.png)](#)

# cb-buffer

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/cb-buffer.svg)](https://www.npmjs.com/package/cb-buffer) [![Downloads](https://img.shields.io/npm/dt/cb-buffer.svg)](https://www.npmjs.com/package/cb-buffer) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A minimalist NodeJS module for callback buffering.

## :cloud: Installation

```sh
$ npm i --save cb-buffer
```


## :clipboard: Example



```js
// Dependencies
const CallbackBuffering = require("cb-buffer");

// Create a new callback buffer
var cb = new CallbackBuffering();

// Callbacks a random unique number after 1 sec
function getUniqueRandomNumberAsync(callback) {
    if (cb.check(callback)) { return; }
    setTimeout(() => {
        debugger
        cb.done(Math.random());
    }, 1000);
}

// Request the unique number few times.
// It should be unique, and generated once
getUniqueRandomNumberAsync(console.log);
getUniqueRandomNumberAsync(console.log);
getUniqueRandomNumberAsync(console.log);
getUniqueRandomNumberAsync(console.log);
// ... after one second
// => 0.3639475910458714
// => 0.3639475910458714
// => 0.3639475910458714
// => 0.3639475910458714

// After one second (after the random number is found)
// we request it again
setTimeout(() => {
    getUniqueRandomNumberAsync(console.log);
    // => 0.3639475910458714
}, 1000);
```

## :memo: Documentation


### `CbBuffer()`
Creates a new instance of `CbBuffer`.

The instance will contain methods documented below and the following fields:

 - `buffer` (Array): An array of functions to be called.
 - `waiting` (Boolean): A flag representing the state of the buffer.
 - `is_done` (Boolean): A flag representing the done state (is done or not).
 - `args` (Array): The callback function arguments.

#### Return
- **CbBuffer** The `CbBuffer` instance.

### `check(fn)`
Use this function to append the new function and `return` if needed:

```js
if (cb.check(callback)) { return; }
```

#### Params
- **Function** `fn`: The callback function.

#### Return
- **Boolean** `true` if thw async function was called already.

### `call(fn)`
Calls the provided function with the callback arguments.

#### Params
- **Function** `fn`: The function to call.

### `clear()`
CLears the callback array.

### `undone()`
Resets the internal data.

### `done()`
Calls all the functions from the buffer.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bible.js`](https://github.com/BibleJS/bible.js)—The Bible as a NPM module.
 - [`cb-bufferify`](https://github.com/IonicaBizau/cb-bufferify#readme)—Convert any async function to a cb-buffer handler.
 - [`image-parser`](https://github.com/IonicaBizau/image-parser#readme)—An image parser that works.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
