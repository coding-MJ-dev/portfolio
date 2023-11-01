'use strict';

// ---- HEADER ----
// Find haeder
const header = document.querySelector('.header');
// define the height of the header
const headerHeight = header.getBoundingClientRect().height;


 // when scrolling down, if Y axix > headerHeight, I will change the style from transparent to dark
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
})


// ---- HOME ----
// make the home contents transparent when scroll down
const home = document.querySelector('.home__content');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})


// ---- Arrow Up ----
// the arrow button will reveal when a user scroll down the screen
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
})


// ---- nav bar toggle ----
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})


// ---- navbar closed automatically when click the menu ----
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
})


