import { fixVersionButton, relTicketButton, projectsButton } from "./category.js";

export const setUpSidebar = () => {
    const fixVersionCategory = document.getElementById('fixVersionCategory');
    fixVersionCategory.addEventListener('click', () => {
        clearActiveClass();
        fixVersionCategory.classList.toggle('active');
        fixVersionButton()
    });

    const relTicketCategory = document.getElementById('relTicketCategory');
    relTicketCategory.addEventListener('click', () => {
        clearActiveClass();
        relTicketCategory.classList.toggle('active');
        relTicketButton()
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
