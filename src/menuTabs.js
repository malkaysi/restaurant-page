import tabValue from './index.js'

const menuTabs = [
    {
        dom: document.createElement('p'),
        text: "This is the menu <br> Item number One is delicious <br> The second dish is a salad app <br>The third dish is full of cheese"
    },
    {
        dom: document.createElement('p'),
        text: "Test test test"
    },
    {
        dom: document.createElement('p'),
        text: "23 menu item for tab 3"
    }
]

const popTab = (tabValue) => {
    const menu = document.querySelector('#menu');

    // If menu has a query child with a class of tabSelected, then remove it
    if(document.querySelector('.tabSelected')){
        menu.removeChild(menu.lastElementChild);
    }
    // let tabObj = menuTabs[tabValue];
    let tab = document.createElement('p')
    tab.classList.add('tabSelected')
    tab.textContent = menuTabs[tabValue].text;

    menu.appendChild(tab)

}

export default popTab