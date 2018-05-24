# Gürtel - Extensión para Chrome

Extensión conmemorativa a la sentencia del caso Gürtel.

---

- [Instalación](#instalación)
- [Código](#codigo)
- [Referencias](#referencias)
- [Licencia](#licencia)
- [Copyright](#copyright)

---

Sustituye en Twitter el emoji de la bandera de España :es: por uno más acorde :inbox_tray: con nuestros corruptos patriotas y quienes les sostienen. 

*Esta extensión tiene la misma utilidad que ellos, ninguna... Pero al menos no te roba* :wink:

<p align="center">
  <a href="assets/pp-gurtel.png" title="Después de la modificación">
    <img src="assets/pp-gurtel.png">
  </a>
</p>

## Instalación 

· **Clona el repositorio** completo con Git o [descárgalo](https://github.com/Josantonius/chrome-extension-gurtel/archive/master.zip):

    $ git clone https://github.com/Josantonius/chrome-extension-gurtel.git

· **Descomprime el archivo ZIP**

· **Entra en la URL** `chrome://extensions/` y **marca la casilla de modo de desarrollador** en la parte superior derecha.

· **Haz click en el botón empaquetar extensión** y selecciona la carpeta `chrome-extension-gurtel` para instalar la extensión.

· **Activa la extensión**.

## Código

```javascript
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
```

*Si quieres modificar el emoji de sustitución, entra en el archivo `gurtel.js` y sustituye la imagen del emoji de Twitter en la variable `Ṕopular`.*

Por ejemplo:

    Popular = '1f4a9.png'

## Referencias 

- [La sentencia de Gürtel describe el fraude en el Partido Popular desde su fundación](https://www.eldiario.es/politica/sentencia-Gurtel-Partido-Popular-fundacion_0_774823627.html)

- [Sentencia Gürtel: 51 años para Correa, 33 para Bárcenas y el PP condenado "a título lucrativo"](https://www.eldiario.es/politica/Audiencia-Nacional-Correa-Barcenas_0_774472885.html)

## Licencia

Este extensión está licenciada bajo **licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más información.

## Copyright

2018 Josantonius, [josantonius.com](https://josantonius.com/)

Puedes contactarme en [Twitter](https://twitter.com/Josantonius) o a través de mi [correo electrónico](mailto:hello@josantonius.com).