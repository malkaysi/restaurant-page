import css from './styles.css';


const createNav = (() => {

    const header = document.createElement('div');
    let body = document.querySelector('body')
    let nav = document.createElement('nav');
    let home = document.createElement('a');
    let menu = document.createElement('a');
    let about = document.createElement('a');
    const logo = document.createElement('div');

    // nav.className = 'topnav';
    home.href = '#home';
    home.textContent = 'Home';
    home.id = 'homeNav'
    

    menu.href = '#menu';
    menu.textContent = 'Menu';
    menu.id = 'menuNav'

    about.href = '#about';
    about.textContent = 'About';
    about.id = 'aboutNav'

    logo.textContent = 'Compass Petal'
    logo.className = 'logo'


    body.appendChild(header);
    header.appendChild(logo)
    header.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
})();

export default createNav;