const createPage = (() => {
    // const container = document.querySelector('#content');
    const container = document.createElement('div');
    const body = document.querySelector('body')

    container.className = 'content';
    container.id = 'content'

    const header = document.createElement('h1');
    const description = document.createElement('p');

    header.textContent = 'The best restaraunt in town!';
    description.textContent = "Try our deluxe pizza and pasta combination - Weekends only!";

    body.appendChild(container);
    container.appendChild(header);
    container.appendChild(description);

})();

export default createPage;