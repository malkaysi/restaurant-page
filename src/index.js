import css from './styles.css';
import createNav from './navbar.js'
import createPage from "/src/content.js";
import {createMenu, popTab} from './menuTabs.js'


// createMenu();

const menu = document.querySelector('#menu');
const tabs = document.querySelectorAll('div.button')
let tabValue;

popTab(0);

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabValue = parseInt(tab.id)
        popTab(tabValue);
    })
})


export default tabValue;