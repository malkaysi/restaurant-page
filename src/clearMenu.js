import tabOneText from "./tabOne.js"
import populateTabTwo from "./tabTwo.js"

const clearMenu = () => {
    
    const menu = document.querySelector('#menu');
    console.log(tabOneText);
    menu.removeChild(tabOneText);
    
    //menu.removeChild();


};

export default clearMenu