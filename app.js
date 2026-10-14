// Fuente de datos: refs/lista-sitios.csv (transcrita para funcionar sin servidor).
// Campos: nombre, sitio para jugar (o null), repositorio (o null).
const SITIOS = [
  { nombre: "Dania Valdez", jugar: "https://dania555.github.io/bailandotangosolitario/", repo: "https://github.com/Dania555/bailandotangosolitario" },
  { nombre: "Mariana Piñeiro", jugar: "https://a01708055-lab.github.io/juegos-dig/", repo: "https://github.com/a01708055-lab/juegos-dig/tree/main" },
  { nombre: "Mariana Cantú", jugar: null, repo: "https://github.com/a00574683/MIS-JUEGOS" },
  { nombre: "Frances Ruiz", jugar: null, repo: "https://github.com/FrAncesRL/juegos" },
  { nombre: "Camila Torres", jugar: "https://a01068064-lgtm.github.io/1JUEGOS/", repo: "https://github.com/a01068064-lgtm/1JUEGOS" },
  { nombre: "Astrid Díaz", jugar: "https://astriddiaz15.github.io/Mini_Juegos/", repo: "https://github.com/astriddiaz15/Mini_Juegos" },
  { nombre: "Nadia Santillán", jugar: "https://nad1a20.github.io/Prueba-juegos-retro/", repo: "https://github.com/Nad1a20/Prueba-juegos-retro" },
  { nombre: "Juan Pablo Barba", jugar: "https://jpeatsbagels.github.io/Juegos-retro/", repo: "https://github.com/jpeatsbagels/Juegos-retro" },
  { nombre: "Alexa Fonseca", jugar: "https://a01743627-lab.github.io/Juegos/", repo: "https://github.com/a01743627-lab/Juegos" },
  { nombre: "Pau Torres", jugar: "https://pauvtorress.github.io/Juegos/", repo: "https://github.com/pauvtorress/Juegos" },
  { nombre: "Matheus Lebrao", jugar: "https://matheusbubulubu.github.io/HELL-GAME/", repo: null },
  { nombre: "Juan Pablo Cedillo", jugar: "https://a01713855.github.io/JuegosClasicos/", repo: "https://github.com/a01713855/JuegosClasicos" }
];

const grid = document.getElementById("grid");
const count = document.getElementById("count");

function etiqueta(sitio) {
  if (sitio.jugar && sitio.repo) return "";
  if (!sitio.jugar) return '<span class="tag">Solo repositorio</span>';
  return '<span class="tag">Solo demo</span>';
}

function tarjeta(sitio) {
  const botones = [];
  if (sitio.jugar) {
    botones.push(`<a class="btn btn-play" href="${sitio.jugar}" target="_blank" rel="noopener">Jugar</a>`);
  }
  if (sitio.repo) {
    botones.push(`<a class="btn btn-repo" href="${sitio.repo}" target="_blank" rel="noopener">Repositorio</a>`);
  }
  const texto = sitio.jugar && sitio.repo
    ? "Entra a jugar o abre el repositorio para ver cómo corre por dentro."
    : (sitio.jugar
      ? "Entra a jugar este proyecto desde su sitio publicado."
      : "Este proyecto solo comparte su repositorio, entra a ver cómo corre por dentro.");
  return `<article class="card">
    <div class="card-top"><h2>${sitio.nombre}</h2>${etiqueta(sitio)}</div>
    <p>${texto}</p>
    <div class="actions">${botones.join("")}</div>
  </article>`;
}

grid.innerHTML = SITIOS.map(tarjeta).join("");
count.textContent = `${SITIOS.length} proyectos de la comunidad LDI.`;
