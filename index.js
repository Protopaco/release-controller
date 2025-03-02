
import { setUpSidebar } from './components/sidebar/sidebar.js';
import { setUpContent } from './components/content/content.js';

document.addEventListener('DOMContentLoaded', () => {
    setUpSidebar();
    setUpContent();
});