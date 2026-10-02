/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


/* =========================================
   AUTOMATICALLY SHOW CURRENT YEAR
========================================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
