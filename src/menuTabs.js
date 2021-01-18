import css from './styles.css';
import tabValue from './index.js'



const menuTabs = [
        `7 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>
        8 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>
        5 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>
        9 &nbsp Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>
        5 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>
        7 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>
        8 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>
        5 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>
        9 &nbsp  Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>
        5 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>
        6 &nbsp  Proin consectetur tortor nec est pretium fringilla`,
        `11 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>
        13 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>
        9 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>
        9 &nbsp Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>
        13 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>
        12 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>
        15 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>
        14 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>
        18 &nbsp  Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>
        12 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>
        8 &nbsp  Proin consectetur tortor nec est pretium fringilla`,
        `17 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>
        16 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>
        9 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>
        14 &nbsp Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>
        22 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>
        25 &nbsp Lorem ipsum dolor sit amet, consectetur adipiscing elit <br><br>
        20 &nbsp Cras sed ante ac tortor hendrerit sagittis. <br><br>
        14 &nbsp Duis eu mauris ut orci sagittis faucibus mollis id enim. <br><br>
        18 &nbsp  Nulla fringilla massa pulvinar nulla mollis, non varius nisi commodo.<br><br>
        12 &nbsp Nunc in leo nec ipsum gravida vulputate.<br><br>
        30 &nbsp  Proin consectetur tortor nec est pretium fringilla`
];

const createMenu = (() => {
    
    let body = document.querySelector('body')
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.className = 'pageContent'

    const tabContainer = document.createElement('div');
    tabContainer.className = 'contentButton';
    tabContainer.id = 'content-button';
    
    const tabOne = document.createElement('button');
    tabOne.className = "button-clicked";
    tabOne.id = '0';
    tabOne.textContent = 'Appetizers';

    const tabTwo = document.createElement('button');
    tabTwo.className = "button";
    tabTwo.id = '1';
    tabTwo.textContent = 'Lunch';

    const tabThree = document.createElement('button');
    tabThree.className = "button";
    tabThree.id = '2';
    tabThree.textContent = 'Dinner';

    body.appendChild(menu);
    menu.appendChild(tabContainer);
    tabContainer.appendChild(tabOne);
    tabContainer.appendChild(tabTwo);
    tabContainer.appendChild(tabThree);


});


const popTab = (tabValue) => {
    const menu = document.querySelector('#menu');

    // If menu has a query child with a class of tabSelected, then remove it
    if(document.querySelector('.tabSelected')){
        menu.removeChild(menu.lastElementChild);
    }
    // let tabObj = menuTabs[tabValue];
    let tab = document.createElement('p')
    tab.classList.add('tabSelected')
    tab.innerHTML = menuTabs[tabValue];

    menu.appendChild(tab)

}

export {createMenu, popTab}