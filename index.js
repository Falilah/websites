"use strict";
const openHamburger = document.querySelector(".menu");
const navbar = document.querySelector(".hamburger");
navbar.addEventListener("click", function () {
  openHamburger.classList.toggle("hidden");
});
