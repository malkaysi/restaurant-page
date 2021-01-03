import createPage from "/src/content.js";
import populateTabTwo from "./tabTwo.js"
import displayTabOne from "./tabOne.js"

const menu = document.querySelector('#menu');
const tabTwo = document.getElementById('tabTwoContent');

/* const tabTwo = document.querySelector('#tabTwoContent');

tabTwo.addEventListener('click', function1); */


tabTwo.addEventListener('click', () => {
    populateTabTwo();
});
