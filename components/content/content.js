
export const setUpContent = () => {
    console.log('setUpContent');
}

export const loadContent = (newContent) => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(newContent);
}