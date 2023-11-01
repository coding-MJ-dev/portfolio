'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.filter;
  if (filter == null) {
    return;
  }
  manageActiveSelection(event.target);
  filterProjects(filter);
});


//show the active menu
function manageActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}


function filterProjects(filter) {
  //project filtering
  projects.forEach(project => {
    console.log(project.dataset.filter)
    if (filter === 'all' || filter === project.dataset.filter) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out')
  }, 250)
}