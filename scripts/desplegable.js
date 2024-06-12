function toggleOpen() {
    document.getElementById("desplegable").classList.toggle("show");
    document.getElementById("menu-icon").classList.toggle("show");
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('desplegable');
    const menuIcon = document.getElementById('menu-icon');
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('show');
        menuIcon.classList.remove('show');
    }
});