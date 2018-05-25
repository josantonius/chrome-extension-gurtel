/**
 * Extensión conmemorativa a la sentencia del caso Gürtel.
 * 
 * @author     Josantonius - hello@josantonius.com
 * @copyright  Copyright (c) 2018
 * @license    https://opensource.org/licenses/MIT - The MIT License (MIT)
 * @link       https://github.com/Josantonius/chrome-extension-gurtel
 * @since      1.0.0
 */
(function Gürtel(M, PP, spanish, political, corruption) {
  document.querySelectorAll(`[style*="${M.Rajoy}"], [src*="${M.Rajoy}"]`).forEach(corruption => {
    corruption.src
    ? corruption.setAttribute('src', PP)
    : corruption.setAttribute('style', `background-image:url("${PP}")`)
  })
  setTimeout(() => { Gürtel(M, PP) }, 2018)
})({ Rajoy: '1f1ea-1f1f8.png' }, '//abs.twimg.com/emoji/v2/72x72/1f4e9.png')
