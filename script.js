const boton = document.getElementById('themeIcon');
const colorCss = document.getElementById('colorStylesCss');
const themeIcon = document.getElementById('themeIcon');
const informationIcon = document.getElementById('informationIcon');
const homeIcon = document.getElementById('homeIcon');

// Cambio de light/dark themez
boton.addEventListener("click", () => {
    //alert('¡Soy un botón!');  
    const newCss = colorCss.getAttribute('href') === 'darkStyles.css' ? 'lightStyles.css' : 'darkStyles.css';
    colorCss.setAttribute('href', newCss);
    const newThemeIcon =  themeIcon.getAttribute('src') === 'src/moonIcon.png' ? 'src/sunIcon.png':'src/moonIcon.png';
    themeIcon.setAttribute('src',newThemeIcon);
    const newInformationIcon =  informationIcon.getAttribute('src') === 'src/lightInformation.png' ? 'src/darkInformation.png':'src/lightInformation.png';
    informationIcon.setAttribute('src',newInformationIcon);
    const newHomeIcon =  homeIcon.getAttribute('src') === 'src/lightHome.png' ? 'src/darkHome.png':'src/lightHome.png';
    homeIcon.setAttribute('src',newHomeIcon);

});
 // Peticiones a la API de monster hunter.
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://mhw-db.com/monsters");
xhr.responseType = "json";
let data; 
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    data = xhr.response;
    data.sort(function(a,b){
        if(a.name > b.name){return 1;}
        if(a.name < b.name){return -1;}
        return 0;
    });
    console.log(data);
} else {
    console.log(`Error: ${xhr.status}`);
}
};
xhr.send();
