export default function toggleMenuIcon() {
    const menuIcon = document.getElementById('menuIcon');
    menuIcon.addEventListener("click", function() {
        this.classList.toggle("active");
    });
}
