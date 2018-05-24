/**
 * Extensión conmemorativa a la sentencia del caso Gürtel.
 * 
 * @author     Josantonius - hello@josantonius.com
 * @copyright  Copyright (c) 2018
 * @license    https://opensource.org/licenses/MIT - The MIT License (MIT)
 * @link       https://github.com/Josantonius/chrome-extension-gurtel
 * @since      1.0.0
 */
(function gurtel() {
  let M = { Rajoy: '1f1ea-1f1f8.png' },
      caja = document.querySelectorAll('[style*="' + M.Rajoy + '"], [src*="' + M.Rajoy + '"]')
      Partido = 'https://abs.twimg.com/emoji/v2/72x72/',
      Popular = '1f4e9.png'
  for (let B in caja) {
    if (B % 1 !== 0) continue
    caja[B].style.backgroundImage
    ? caja[B].setAttribute('style', 'background-image:url("' + Partido + Popular + '")')
    : caja[B].setAttribute('src', Partido + Popular)
  }
  setTimeout(gurtel, 1500)
})()
