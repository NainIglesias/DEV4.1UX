const boton = document.getElementById('themeIcon');
const colorCss = document.getElementById('colorStylesCss');
const themeIcon = document.getElementById('themeIcon');
const informationIcon = document.getElementById('informationIcon');
const homeIcon = document.getElementById('homeIcon');

const themeIconMobile = document.getElementById('themeIconMobile');
const informationIconMobile = document.getElementById('informationIconMobile');
const homeIconMobile = document.getElementById('homeIconMobile');

// Cambio de light/dark themes
function changeThemes(){
    //alert("aaaaaaaaaaaa")
    const newCss = colorCss.getAttribute('href') === 'darkStyles.css' ? 'lightStyles.css' : 'darkStyles.css';
    colorCss.setAttribute('href', newCss);
    const newThemeIcon =  themeIcon.getAttribute('src') === 'src/moonIcon.png' ? 'src/sunIcon.png':'src/moonIcon.png';
    themeIcon.setAttribute('src',newThemeIcon);
    const newInformationIcon =  informationIcon.getAttribute('src') === 'src/lightInformation.png' ? 'src/darkInformation.png':'src/lightInformation.png';
    informationIcon.setAttribute('src',newInformationIcon);
    const newHomeIcon =  homeIcon.getAttribute('src') === 'src/lightHome.png' ? 'src/darkHome.png':'src/lightHome.png';
    homeIcon.setAttribute('src',newHomeIcon);

    const newthemeIconMobile =  themeIconMobile.getAttribute('src') === 'src/moonIcon.png' ? 'src/sunIcon.png':'src/moonIcon.png';
    themeIconMobile.setAttribute('src',newthemeIconMobile);
    const newInformationIconMobile =  informationIconMobile.getAttribute('src') === 'src/lightInformation.png' ? 'src/darkInformation.png':'src/lightInformation.png';
    informationIconMobile.setAttribute('src',newInformationIconMobile);
    const newHomeIconMobile =  homeIconMobile.getAttribute('src') === 'src/lightHome.png' ? 'src/darkHome.png':'src/lightHome.png';
    homeIconMobile.setAttribute('src',newHomeIconMobile);

}
boton.addEventListener("click", changeThemes);
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
} else {
    console.log(`Error: ${xhr.status}`);
}
};
xhr.send();
console.log(data);
