import createPage from "/src/content.js";
// import clearMenu from './clearMenu.js'
import popTab from './menuTabs.js'


const menu = document.querySelector('#menu');
const tabs = document.querySelectorAll('div.button')
let tabValue;



tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabValue = parseInt(tab.id)
        popTab(tabValue);
    })
})

export default tabValue;