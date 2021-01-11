import createPage from "/src/content.js";
import './styles.css';
import popTab from './menuTabs.js'


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