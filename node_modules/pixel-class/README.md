
# pixel-class

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/pixel-class.svg)](https://www.npmjs.com/package/pixel-class) [![Downloads](https://img.shields.io/npm/dt/pixel-class.svg)](https://www.npmjs.com/package/pixel-class) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A tiny class for pixel manipulation.

## :cloud: Installation

```sh
$ npm i --save pixel-class
```


## :clipboard: Example



```js
const Pixel = require("pixel-class");

let p = new Pixel(42, 7, 6, 0.5);
console.log(p);
console.log(p.intensity());
```

## :memo: Documentation


### `PixelClass(r, g, b, a)`
A tiny class for pixel manipulation.

#### Params
- **Number|Object** `r`: The *red* value of the pixel (0-255) or an object containing the `r`, `g`, `b`, `a` fields.
- **Number** `g`: The *green* value of the pixel (0-255).
- **Number** `b`: The *blue* value of the pixel (0-255).
- **Number** `a`: The *alpha* (opacity) value of the pixel. If greater then `1`, it will be normalized to a value between `0` and `1`. Defaults
to `1`.

#### Return
- **PixelClass** The `PixelClass` instance.

### `intensity()`
Calculates the pixel intensity.

#### Return
- **Number** The pixel intensity (0-255).



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`asciify-pixel`](https://github.com/IonicaBizau/asciify-pixel#readme)—Asciifies a pixel object.
 - [`gm-tools`](https://github.com/IonicaBizau/gm-tools#readme)—Friendly tools for interacting with GraphicsMagick.
 - [`image-parser`](https://github.com/IonicaBizau/image-parser#readme)—An image parser that works.
 - [`lwip-pixels`](https://github.com/IonicaBizau/lwip-pixels#readme)—Get a matrix of pixels from a lwip image object.
 - [`pixel-bg`](https://github.com/IonicaBizau/pixel-bg#readme)—Change the pixel background color.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
