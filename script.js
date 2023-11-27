const boton = document.getElementById('button1');
const css = document.getElementById('stylesCss');
boton.addEventListener("click", () => {
    alert('¡Soy un botón!');  
    const newCss = css.getAttribute('href') === 'darkStyles.css' ? 'lightStyles.css' : 'darkStyles.css';
    css.setAttribute('href', newCss);
});
