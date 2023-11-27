const boton = document.getElementById('themeIcon');
const colorCss = document.getElementById('colorStylesCss');
const themeIcon = document.getElementById('themeIcon');
const informationIcon = document.getElementById('informationIcon');
const homeIcon = document.getElementById('homeIcon');


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
