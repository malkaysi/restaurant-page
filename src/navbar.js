import css from './styles.css';


const createNav = (() => {

    let body = document.querySelector('body')
    let nav = document.createElement('nav');
    let home = document.createElement('a');
    let menu = document.createElement('a');
    let about = document.createElement('a');

    // nav.className = 'topnav';
    home.href = '#home';
    home.textContent = 'Home';

    menu.href = '#menu';
    menu.textContent = 'Menu';

    about.href = '#about';
    about.textContent = 'About';


    body.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
})();

export default createNav;