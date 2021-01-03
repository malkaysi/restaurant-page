const populateTabTwo = (() => {
    /* const menu = document.querySelector('#menu');
    const tabTwo = document.createElement('p');

    tabTwo.setAttribute('id', 'menuTwo')

    tabTwo.textContent = "Test test test";

    menu.appendChild(tabTwo); */

    const tabTwo = document.getElementById('tabTwoContent');

    /* tabTwo.addEventListener('click', () => {
        alert('test');
    }); */

    const test = () => {
        tabTwo.addEventListener('click', () => {
            alert('test');
        });
    }

    return { test };

})();

const function1 = populateTabTwo.test();

export { function1 }