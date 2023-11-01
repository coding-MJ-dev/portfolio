'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.filter;
  if (filter == null) {
    return;
  }
  projects.forEach(project => {
    console.log(project.dataset.filter)
    if (filter === 'all' || filter === project.dataset.filter) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  })

})
