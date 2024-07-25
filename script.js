const openNav = document.querySelector('#open-nav');
const navbar = document.querySelector('.navbar');
const closeNav = document.querySelector('#close-nav');
const navLinks = document.querySelectorAll('.navbar ul li a');

openNav.onclick = () => {
    navbar.classList.add("active");
};

closeNav.onclick = () => {
    navbar.classList.remove("active");
};

// Close the navbar when a menu item is clicked
navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove("active");
    };
});