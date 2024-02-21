window.addEventListener("load", (event) => {

    let menu = document.querySelector("header nav");
    let menuIcon = document.querySelector("header nav .menu-icon");
    let closeMenu = document.querySelector("header nav .close-icon");

    menuIcon.addEventListener("click", () => {
        menu.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
        menu.classList.remove("open");
    });

});