import css from './styles.css';
import createNav from './navbar.js'
import createPage from "/src/content.js";
import { createMenu, popTab } from './menuTabs.js'


const tabs = document.querySelectorAll('div.button')
let tabValue;

popTab(0);

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


export default tabValue;