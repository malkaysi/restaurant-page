import css from './styles.css';


const createNav = (() => {

    let body = document.querySelector('body')
    let nav = document.createElement('nav');
    let home = document.createElement('a');
    let menu = document.createElement('a');
    let about = document.createElement('a');

    home.href = '#home';
    home.textContent = 'Home';
    home.id = 'homeNav'
    

    menu.href = '#menu';
    menu.textContent = 'Menu';
    menu.id = 'menuNav'

    about.href = '#about';
    about.textContent = 'About';
    about.id = 'aboutNav'



    body.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
})();

export default createNav;