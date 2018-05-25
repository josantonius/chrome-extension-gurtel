# Gürtel - Extensión para Chrome

Extensión conmemorativa a la sentencia del caso Gürtel.

---

- [Instalación](#instalación)
- [Código](#codigo)
- [Referencias](#referencias)
- [Licencia](#licencia)
- [Copyright](#copyright)

---

Sustituye en Twitter el emoji de la bandera de España por uno más acorde con esos, que envueltos en un trozo de tela, saquean lealmente su patria.

  > La extensión es tan inútil como ellos, pero al menos no te roba :smirk:

<p align="center">
  <a href="assets/condena-pp-gurtel.png">
    <img width="430px" src="assets/condena-pp-gurtel.png">
  </a>
  <a href="assets/condena-pp-gurtel-2.png">
    <img width="430px" src="assets/condena-pp-gurtel-2.png">
  </a>
</p>

## Instalación

### Método 1

- **Descarga el archivo** [gurtel.crx](https://github.com/Josantonius/chrome-extension-gurtel/raw/master/gurtel.crx).

- **Entra en la URL** `chrome://extensions/` y **marca la casilla de modo de desarrollador** en la parte superior derecha.

- **Arrastra el archivo descargado** a la pestaña abierta de `chrome://extensions/`.

- **Instala la extensión**.

### Método 2

- [Descárga](https://github.com/Josantonius/chrome-extension-gurtel/archive/master.zip) el repositorio completo o **utiliza Git para clonarlo**.

- **Descomprime el archivo ZIP**.

- **Entra en la URL** `chrome://extensions/` y **marca la casilla de modo de desarrollador** en la parte superior derecha.

- **Haz click en el botón empaquetar extensión** y selecciona el directorio `chrome-extension-gurtel` para **instalar la extensión**.

- **Arrastra el archivo generado** a la pestaña abierta de `chrome://extensions/`.

- **Instala la extensión**.

## Código

```javascript
(function Gürtel(M, PP, spanish, political, corruption) {
  document.querySelectorAll(`[style*="${M.Rajoy}"], [src*="${M.Rajoy}"]`).forEach(corruption => {
    corruption.src
    ? corruption.setAttribute('src', PP)
    : corruption.setAttribute('style', `background-image:url("${PP}")`)
  })
  setTimeout(() => { Gürtel(M, PP) }, 2018)
})({ Rajoy: '1f1ea-1f1f8.png' }, '//abs.twimg.com/emoji/v2/72x72/1f4e9.png')
```

  > *Si quieres utilizar un emoji de sustitución diferente, utiliza el método de instalación 2, entra en el archivo `gurtel.js` antes de empaquetar la extensión y sustituye en la última línea la URL de la imagen del emoji de Twitter.*

Por ejemplo:

```javascript
})({ Rajoy: '1f1ea-1f1f8.png' }, 'https://abs.twimg.com/emoji/v2/72x72/1f4a9.png')
```

También puedes modificar el intervalo de actualización:

```javascript
setTimeout(() => { Gürtel(M, PP) }, 5000) // cada 5 segundos
```

## Referencias 

- [Condena al PP por Corrupción](http://www.publico.es/politica/rajoy-dijo-guertel-trama-pp.html)

- [La sentencia de Gürtel describe el fraude en el Partido Popular desde su fundación](https://www.eldiario.es/politica/sentencia-Gurtel-Partido-Popular-fundacion_0_774823627.html)

- [Sentencia Gürtel: 51 años para Correa, 33 para Bárcenas y el PP condenado "a título lucrativo"](https://www.eldiario.es/politica/Audiencia-Nacional-Correa-Barcenas_0_774472885.html)

## Licencia

Este extensión está licenciada bajo **licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más información.

## Copyright

2018 Josantonius, [josantonius.com](https://josantonius.com/)

Puedes contactarme en [Twitter](https://twitter.com/Josantonius) o a través de mi [correo electrónico](mailto:hello@josantonius.com).