const boton = document.getElementById('themeIcon');
const colorCss = document.getElementById('colorStylesCss');
const themeIcon = document.getElementById('themeIcon');
const informationIcon = document.getElementById('informationIcon');
const homeIcon = document.getElementById('homeIcon');

const themeIconMobile = document.getElementById('themeIconMobile');
const informationIconMobile = document.getElementById('informationIconMobile');
const homeIconMobile = document.getElementById('homeIconMobile');

// Obtener el valor actual de la variable desde localStorage
let miVariable = obtenerValorVariable();

// Función para obtener el valor de la variable desde el archivo JSON
function obtenerValorVariable() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "config.json", true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const miVariable = data.miVariable !== undefined ? data.miVariable : false;
                resolve(miVariable);
            } else {
                console.error("Error al cargar el archivo JSON.");
                reject("Error al cargar el archivo JSON.");
            }
        };

        xhr.send();
    });
}

// Función para cambiar el valor de la variable y guardar en el archivo JSON
function cambiarValorVariable() {
    obtenerValorVariable().then((valorActual) => {
        const nuevoValor = !valorActual;

        // Guardar el nuevo valor en el archivo JSON
        const nuevoData = { "miVariable": nuevoValor };
        const nuevoDataString = JSON.stringify(nuevoData);

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "config.json", true);  // Cambiamos a POST
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onload = function() {
            if (xhr.status === 200) {
                localStorage.setItem('miVariable', nuevoValor);
            } else {
                console.error("Error al guardar el nuevo valor en el archivo JSON.");
            }
        };

        xhr.send(nuevoDataString);
    }).catch((error) => {
        console.error(error);
    });
}

// Cambio de light/dark themes
function changeThemes() {
    const newCss = miVariable ? 'lightStyles.css' : 'darkStyles.css';
    colorCss.setAttribute('href', newCss);
    const newThemeIcon = !miVariable ? 'src/sunIcon.png' : 'src/moonIcon.png';
    themeIcon.setAttribute('src', newThemeIcon);
    const newInformationIcon = !miVariable ? 'src/darkInformation.png' : 'src/lightInformation.png';
    informationIcon.setAttribute('src', newInformationIcon);
    const newHomeIcon = !miVariable? 'src/darkHome.png' : 'src/lightHome.png';
    homeIcon.setAttribute('src', newHomeIcon);

    const newthemeIconMobile = !miVariable ? 'src/sunIcon.png' : 'src/moonIcon.png';
    themeIconMobile.setAttribute('src', newthemeIconMobile);
    const newInformationIconMobile = !miVariable ? 'src/darkInformation.png' : 'src/lightInformation.png';
    informationIconMobile.setAttribute('src', newInformationIconMobile);
    const newHomeIconMobile = !miVariable ? 'src/darkHome.png' : 'src/lightHome.png';
    homeIconMobile.setAttribute('src', newHomeIconMobile);

    console.log(miVariable);
}
changeThemes();

boton.addEventListener("click", ()=>{
cambiarValorVariable();
changeThemes();
});



