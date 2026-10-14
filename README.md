# Galería de juegos · LDI

Galería web que presenta 12 proyectos de juegos creados por estudiantes de LDI (Licenciatura en Diseño, Tec de Monterrey, Campus Guadalajara). Cada tarjeta lleva al sitio donde se juega y al repositorio en GitHub para ver cómo corre cada juego por dentro.

## Ver la galería

Sin instalación ni servidor: abre `index.html` en tu navegador. También puedes servir la carpeta local:

```bash
python -m http.server 8123
```

y visitar `http://localhost:8123/index.html`.

## Estructura

```text
index.html               Galería (portada, tarjetas, pie)
styles.css               Estilos según el manual de identidad
app.js                   Datos y render de las tarjetas
manual-identidad-ldi.md  Manual de identidad unificado (Marca + LDI)
imgs/                    Logotipos LDI (blanco y negro)
refs/                    Fuente de datos y manuales originales
```

## Datos

Los 12 sitios se transcriben de `refs/lista-sitios.csv` (columnas: nombre, sitio para jugar, repositorio). 9 proyectos tienen ambos enlaces, 2 solo repositorio y 1 solo demo. Si agregas o corriges filas en el CSV, réplicalas en el arreglo `SITIOS` de `app.js`.

## Identidad

Diseño según `manual-identidad-ldi.md`: fondo blanco, textos negro `#141414`, acentos rosa oficial `#C51162` y fucsia `#D92D8A`, tipografía Raleway, descriptor «LDI · Licenciatura en Diseño · Tec de Monterrey, Campus Guadalajara» y lema «Diseña lo que sigue».

## Crédito

Proyecto de la comunidad LDI. LDI es una marca aliada y reconocible del ecosistema Tec de Monterrey.
