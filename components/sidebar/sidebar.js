
import { fixVersionButton, applicationButton, projectsButton } from "./category.js";

export const setUpSidebar = () => {
    const fixVersionCategory = document.getElementById('fixVersionCategory');
    fixVersionCategory.addEventListener('click', () => {
        clearActiveClass();
        fixVersionCategory.classList.toggle('active');
        fixVersionButton()
    });

    const applicationCategory = document.getElementById('applicationCategory');
    applicationCategory.addEventListener('click', () => {
        clearActiveClass();
        applicationCategory.classList.toggle('active');
        applicationButton()
    });

    const projectsCategory = document.getElementById('projectsCategory');
    projectsCategory.addEventListener('click', () => {
        clearActiveClass();
        projectsCategory.classList.toggle('active');
        projectsButton()
    });
}

const clearActiveClass = () => {
    const categories = Array.from(document.getElementsByClassName('category'));
    categories.forEach(cat => {
        cat.classList.remove('active');
    })
}
