/*
 * Versions disponibles
 */

const version_book = document.getElementById("version_book");

fetch("index.json")
.then(response => response.json())
.then(index => {
  index.version.forEach(value => {
    version_book.options.add(new Option(value[1]));
    });
  });

/*
 * Choix de l’affichage
 */
const display_type = document.getElementById("display_type");

const nav_origin = document.getElementById("nav_origin");
const nav_dyn = document.getElementById("nav_dyn");

display_type.addEventListener("change", e => {
  if (display_type.value == "Original") {
    nav_origin.style.display = "initial";
    nav_dyn.style.display = "none";
  } else {
    nav_origin.style.display = "none";
    nav_dyn.style.display = "block";
  }
});

