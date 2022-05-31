# Gürtel - Chrome extension

Commemorative extension to the Gürtel case sentence.

**Translations**: [Español](.github/lang/es-ES/README.md)

---

- [Installation](#installation)
- [Code](#code)
- [References](#references)
- [Changelog](#changelog)
- [Contribution](#contribution)
- [Sponsor](#sponsor)
- [License](#license)

---

Replace on Twitter the emoji of the flag of Spain by one more in line with those who, wrapped in a piece of cloth,
loyally plunder their homeland.

  > This extension is as useless as they, but at least it doesn't steal from you :smirk:

[Original](/assets/condena-pp-gurtel.png) | [Result](/assets/condena-pp-gurtel-2.png)

## Installation

### Method 1

- **Download the file** [gurtel.crx](https://github.com/josantonius/chrome-extension-gurtel/raw/master/gurtel.crx).

- **Go to the URL** `chrome://extensions/` and **check the developer mode box** at the top right.

- **Drag the generated file** (`gurtel.crx`) to the `chrome://extensions/ tab`.

- **Install the extension**.

### Method 2

- [Download](https://github.com/josantonius/chrome-extension-gurtel/archive/master.zip) the full repository
or **use Git to clone it**.

- **Unzip the ZIP file**.

- **Go to the URL** `chrome://extensions/` and **check the developer mode box** at the top right.

- **Click on the pack extension button** and select the `chrome-extension-gurtel` directory to **install it**.

- **Drag the generated file** (`gurtel.crx`) to the `chrome://extensions/ tab`.

- **Install the extension**.

## Code

```javascript
(function Gurtel(M, PP, spanish, political, corruption) {
  document.querySelectorAll(`[style*="${M.Rajoy}"], [src*="${M.Rajoy}"]`).forEach(corruption => {
    corruption.src
    ? corruption.setAttribute('src', PP)
    : corruption.setAttribute('style', `background-image:url("${PP}")`)
  })
  setTimeout(() => { Gurtel(M, PP) }, 1000)
})({ Rajoy: '1f1ea-1f1f8.png' }, '//abs.twimg.com/emoji/v2/72x72/1f4e9.png')
```

  > *If you want to use a different replacement emoji, use installation method 2, open the `gurtel.js` file before*
  > *packing the extension and replace in the last line the URL of the image of the emoji hosted on Twitter.*

For example, by the Republican flag:

```javascript
})({ Rajoy: '1f1ea-1f1f8.png' }, 'https://pbs.twimg.com/media/DeJ46boWkAs04mN.png')
```

You can also change the update interval:

```javascript
setTimeout(() => { Gurtel(M, PP) }, 5000) // every 5 seconds
```

## References

- [Condena al PP por Corrupción](http://www.publico.es/politica/rajoy-dijo-guertel-trama-pp.html)

- [La sentencia de Gürtel describe el fraude en el Partido Popular desde su fundación](https://www.eldiario.es/politica/sentencia-Gurtel-Partido-Popular-fundacion_0_774823627.html)

- [Sentencia Gürtel: 51 años para Correa, 33 para Bárcenas y el PP condenado "a título lucrativo"](https://www.eldiario.es/politica/Audiencia-Nacional-Correa-Barcenas_0_774472885.html)

## Changelog

Detailed changes for each release are documented in the
[release notes](https://github.com/josantonius/chrome-extension-gurtel/releases).

## Contribution

Please make sure to read the [Contributing Guide](.github/CONTRIBUTING.md),
before making a [pull request](.github/CONTRIBUTING.md#pull-requests),
start a [discussion](.github/CONTRIBUTING.md#discussions) or
report a [issue](.github/CONTRIBUTING.md#issues).

Thanks to all [contributors](https://github.com/josantonius/chrome-extension-gurtel/graphs/contributors)
to this project! :heart:

## Sponsor

If you found this interesting,
[you can become my sponsor!](https://github.com/josantonius#sponsor) :blush:

## License

This project is licensed under the [MIT License](LICENSE).

Copyright © 2018-2022, [Josantonius](https://github.com/josantonius#contact)
