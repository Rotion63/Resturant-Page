function createHome() {
    const home = document.createElement('home');
    home.classList.add('home');

    home.appendChild(createParagraph('Welcome to'));
    home.appendChild(createParagraph('Food and Fun Resturant'));
    home.appendChild(createImage('resturant.jpg'));
    home.appendChild(createImage('cooking.jpg'));
    home.appendChild(createImage('serve.jpg'));
    home.appendChild(createImage('dining.jpg'));

    return home;
}

function createImage(source){
    const image = document.createElement('img');
    image.width = 400;
    image.height = 300;
    image.classList.add('image');
    image.src = `./images/${source}`;
    image.alt = `${source} picture was here.`;

    return image;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = text;

    return paragraph;
}

function loadHome(){
    const main = document.querySelector('.main');
    main.textContent = '';//this line will erase all the things on other tab.
    main.appendChild(createHome());
}

export default loadHome;
