import createPage from "/src/content.js";
import {populateTabOne, tabOneText} from "./tabOne.js"
import populateTabTwo from "./tabTwo.js"
import clearMenu from './clearMenu.js'


const menu = document.querySelector('#menu');
const tabOne = document.getElementById('tabOneContent');
const tabTwo = document.getElementById('tabTwoContent');

populateTabOne();

tabOne.addEventListener('click', () => {
    clearMenu();
    populateTabOne();
});

tabTwo.addEventListener('click', () => {
    clearMenu();
    populateTabTwo();
});
