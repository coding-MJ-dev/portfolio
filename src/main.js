// ---- HEADER ----
// Find haeder
const header = document.querySelector('.header');
// define the height of the header
const headerHeight = header.getBoundingClientRect().height;


 // when scrolling down, if Y axix > headerHeight, I will change the style from transparent to dark
document.addEventListener('scroll', () => {
  //console.log(window.scrollY);
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
