import css from './styles.css';
import createNav from './navbar.js'
import { createMenu, popTab } from './menuTabs.js'
import createAbout from './about.js'



const menuNav = document.querySelector('#menuNav');
const homeNav = document.querySelector('#homeNav');
const aboutNav = document.querySelector('#aboutNav')
const body = document.querySelector('body');
let tabValue;


homeNav.addEventListener('click', () => {
    if(document.querySelector('.pageContent')){
        body.removeChild(document.querySelector('.pageContent'));
    }
    
});

menuNav.addEventListener('click', () => {
    if(document.querySelector('.pageContent')){
        body.removeChild(document.querySelector('.pageContent'));
    }

    createMenu();
    popTab(0);

    const tabs = document.querySelectorAll('button');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {

            if (document.querySelector('.button-clicked')) {
                document.querySelector('.button-clicked').className = 'button'
            }

            tabValue = parseInt(tab.id)
            popTab(tabValue);
            tab.className = 'button-clicked'
        })
    })
});

aboutNav.addEventListener('click', () => {
    if(document.querySelector('.pageContent')){
        body.removeChild(document.querySelector('.pageContent'));
    }
    
    createAbout();
});



export default tabValue;