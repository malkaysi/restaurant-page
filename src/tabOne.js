const populateTabOne = (() => {
    const tabOneText = document.createElement('p');

    tabOneText.setAttribute('id', 'menuTwo')
    tabOneText.classList.add('tabSelected')
    tabOneText.textContent = "This is the menu <br> Item number One is delicious <br> The second dish is a salad app <br>The third dish is full of cheese";

    

    const tabOne = document.getElementById('tabOneContent');

    const test = () => {
        tabOne.addEventListener('click', () => {
            menu.appendChild(tabOneText);
        });
    }

    return { test };

})();

const displayTabOne = populateTabOne.test();

export { displayTabOne }