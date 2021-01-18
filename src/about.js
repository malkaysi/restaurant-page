import css from './styles.css';

const createAbout = (() => {
    const container = document.createElement('div');
    const body = document.querySelector('body')

    container.className = 'pageContent';
    container.id = 'content'

    const header = document.createElement('h1');
    const description = document.createElement('p');

    header.innerHTML = 'ABOUT US';
    description.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam tellus augue, pharetra non nulla id, interdum bibendum tortor. 
    Praesent mollis, mauris in volutpat gravida, velit odio lobortis nulla, eget sollicitudin ante mauris sit amet enim. 
    Donec eu sapien ac dolor fermentum lacinia et a mi. Suspendisse non elementum eros. 
    Sed convallis massa eget lectus dictum, ac feugiat nisi convallis. 
    Cras vehicula lacus leo, eu placerat ligula consectetur vitae. 
    Suspendisse enim augue, aliquam sed sem vel, rutrum hendrerit arcu.
    <br> <br>

    Fusce egestas in ante efficitur sodales. 
    Nam ornare molestie libero et accumsan. 
    Donec auctor imperdiet molestie. 
    Integer mattis justo luctus, placerat nisl sed, posuere ex. 
    Nunc lacinia quis arcu ut hendrerit. 
    Phasellus fringilla est cursus, maximus sapien nec, ornare ex. 
    Aliquam varius lorem interdum dictum suscipit. Vivamus egestas metus vitae ipsum fermentum sollicitudin. 
    Vestibulum metus magna, hendrerit a eros non, maximus malesuada nisl. Maecenas mi risus, tristique et eros eu, fringilla consequat dolor.`;

    body.appendChild(container);
    container.appendChild(header);
    container.appendChild(description);

});

export default createAbout;