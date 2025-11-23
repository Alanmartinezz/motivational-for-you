// Frases por categoría
const frases = {
    motivacion: [
        "Da siempre lo mejor de ti.",
        "Eres más fuerte de lo que crees.",
        "Cada día es una nueva oportunidad."
    ],
    amor: [
        "El amor propio es el inicio de todo.",
        "Quien te quiere, te cuida.",
        "Rodéate de personas que te sumen."
    ],
    tristeza: [
        "Está bien no estar bien.",
        "El dolor también enseña.",
        "No hay noche eterna."
    ],
    autoestima: [
        "Eres suficiente.",
        "Vales más de lo que imaginas.",
        "No te compares. Tú eres único."
    ]
};

let fraseActual = "";

// Frase aleatoria general
function newQuote() {
    const todas = [
        ...frases.motivacion,
        ...frases.amor,
        ...frases.tristeza,
        ...frases.autoestima
    ];
    fraseActual = todas[Math.floor(Math.random() * todas.length)];
    document.getElementById("quote").innerText = fraseActual;
}

// Mostrar frases de categoría
function showCategory(cat) {
    const lista = frases[cat];
    fraseActual = lista[Math.floor(Math.random() * lista.length)];
    document.getElementById("quote").innerText = fraseActual;
}

// Guardar favoritos
function saveFavorite() {
    if (fraseActual === "") return;

    let favs = JSON.parse(localStorage.getItem("favoritos")) || [];

    favs.push(fraseActual);
    localStorage.setItem("favoritos", JSON.stringify(favs));

    showFavorites();
}

// Mostrar favoritos
function showFavorites() {
    let favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    let list = document.getElementById("favorites");

    list.innerHTML = "";

    favs.forEach(f => {
        let li = document.createElement("li");
        li.innerText = f;
        list.appendChild(li);
    });
}

showFavorites();
