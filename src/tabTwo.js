const populateTabTwo = () => {
    const menu = document.querySelector('#menu');
    const tabTwoText = document.createElement('p');

    tabTwoText.setAttribute('id', 'menuTwo')
    tabTwoText.classList.add('tabSelected')
    tabTwoText.textContent = "Test test test";

    menu.appendChild(tabTwoText);


};


export default populateTabTwo;