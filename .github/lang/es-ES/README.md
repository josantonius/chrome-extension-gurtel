# Gürtel - Extensión para Chrome

Extensión conmemorativa a la sentencia del caso Gürtel.

**Traducciones**: [English](/README.md)

---

- [Instalación](#instalación)
- [Código](#código)
- [Referencias](#referencias)
- [Registro de Cambios](#registro-de-cambios)
- [Contribuir](#contribuir)
- [Patrocinar](#patrocinar)
- [Licencia](#licencia)

---

Sustituye en Twitter el emoji de la bandera de España por uno más acorde con esos que,
envueltos en un trozo de tela, saquean lealmente su patria.

  > La extensión es tan inútil como ellos, pero al menos no te roba :smirk:

[Original](/assets/condena-pp-gurtel.png) | [Resultado](/assets/condena-pp-gurtel-2.png)

## Instalación

### Método 1

- **Descarga el archivo** [gurtel.crx](https://github.com/josantonius/chrome-extension-gurtel/raw/master/gurtel.crx).

- **Entra en la URL** `chrome://extensions/` y **marca la casilla de modo de desarrollador** en la parte superior derecha.

- **Arrastra el archivo descargado** a la pestaña abierta de `chrome://extensions/`.

- **Instala la extensión**.

### Método 2

- [Descarga](https://github.com/josantonius/chrome-extension-gurtel/archive/master.zip) el repositorio completo
o **utiliza Git para clonarlo**.

- **Descomprime el archivo ZIP**.

- **Entra en la URL** `chrome://extensions/` y **marca la casilla de modo de desarrollador** en la parte superior derecha.

- **Haz click en el botón empaquetar extensión** y selecciona el directorio `chrome-extension-gurtel` para
**instalar la extensión**.

- **Arrastra el archivo generado** (`gurtel.crx`) a la pestaña abierta de `chrome://extensions/`.

- **Instala la extensión**.

## Código

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

  > *Si quieres utilizar un emoji de sustitución diferente, utiliza el método de instalación 2,*
  > *entra en el archivo `gurtel.js` antes de empaquetar la extensión y sustituye en la última línea la URL de la imagen*
  > *del emoji alojado en Twitter.*

Por ejemplo, por la bandera republicana:

```javascript
})({ Rajoy: '1f1ea-1f1f8.png' }, 'https://pbs.twimg.com/media/DeJ46boWkAs04mN.png')
```

También puedes modificar el intervalo de actualización:

```javascript
setTimeout(() => { Gurtel(M, PP) }, 5000) // cada 5 segundos
```

## Referencias

- [Condena al PP por Corrupción](http://www.publico.es/politica/rajoy-dijo-guertel-trama-pp.html)

- [La sentencia de Gürtel describe el fraude en el Partido Popular desde su fundación](https://www.eldiario.es/politica/sentencia-Gurtel-Partido-Popular-fundacion_0_774823627.html)

- [Sentencia Gürtel: 51 años para Correa, 33 para Bárcenas y el PP condenado "a título lucrativo"](https://www.eldiario.es/politica/Audiencia-Nacional-Correa-Barcenas_0_774472885.html)

## Registro de Cambios

Los cambios detallados de cada versión se documentan en las
[notas de la misma](https://github.com/josantonius/chrome-extension-gurtel/releases).

## Contribuir

Por favor, asegúrate de leer la [Guía de Contribución](CONTRIBUTING.md) antes de hacer una
[solicitud de extracción (pull request)](CONTRIBUTING.md#solicitudes-de-extracción-pull-requests),
comenzar una [discusión (discussions)](CONTRIBUTING.md#discusiones-discussions)
o reportar un [problema (issue)](CONTRIBUTING.md#problemas-issues).

¡Gracias por [colaborar](https://github.com/josantonius/chrome-extension-gurtel/graphs/contributors) con este proyecto!
:heart:

## Patrocinar

Si este proyecto te pareció interesante,
[¡puedes patrocinarme!](https://github.com/josantonius/lang/es-ES/README.md#patrocinar) :blush:

## Licencia

Este proyecto tiene una licencia [MIT License](LICENSE).

Copyright © 2018-2022, [Josantonius](https://github.com/josantonius/lang/es-ES/README.md#contacto)
