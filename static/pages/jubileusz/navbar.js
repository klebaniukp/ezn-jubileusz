const input = document.querySelector('#burger-activator');
const navbar = document.querySelector('.navbar')

const listItems = document.querySelectorAll(".menu-mobile-item");
const mobileMenu = document.querySelector(".menu-mobile");

function manageMobileMenu() {
    changeBackgroundColor();
    manageMenuMovement();
}

function manageMenuMovement() {
    if (input.checked) {
        mobileMenu.classList.remove("menu-mobile-shrink");
        mobileMenu.classList.add("menu-mobile-expand");
    }
    if(!input.checked) {
        mobileMenu.classList.remove("menu-mobile-expand");
        mobileMenu.classList.add("menu-mobile-shrink");
    }
}

function changeBackgroundColor() {
    if (input.checked) {
        navbar.classList.add("navbar-light");
    } else {
        navbar.classList.remove("navbar-light");
    }
}

function closeMenu() {
    input.click();
}

input.addEventListener("click", manageMobileMenu);

listItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
})