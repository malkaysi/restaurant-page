import createPage from "/src/content.js";
/* import {populateTabOne, tabOneText} from "./tabOne.js"
import populateTabTwo from "./tabTwo.js" */
import clearMenu from './clearMenu.js'


const menu = document.querySelector('#menu');
const tabs = document.querySelectorAll('button')
/* const tabOne = document.getElementById('tabOneContent');
const tabTwo = document.getElementById('tabTwoContent'); */


tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        
        value = tab.value;
        console.log(value)
    })
})



/* 
tabOne.addEventListener('click', () => {
    clearMenu();
    populateTabOne();
});

tabTwo.addEventListener('click', () => {
    clearMenu();
    populateTabTwo();
}); */
