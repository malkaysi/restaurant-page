const createPage = (() => {
    const container = document.querySelector('#content');
    //const image = document.createElement('img');
    const header = document.createElement('h1');
    const description = document.createElement('p');

    //image.src = "https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-1.jpg";
    header.textContent = 'The best restaraunt in town!';
    description.textContent = "Try our deluxe pizza and pasta combination - Weekends only!";

    //image.classList.add('image');
    
    //container.appendChild(image);
    container.appendChild(header);
    container.appendChild(description);

})();

export {createPage};