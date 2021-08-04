function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    contact.appendChild(createParagraph('Meet us'));
    contact.appendChild(createParagraph('Address:- Near Damak View Tower.'));
    contact.appendChild(createParagraph('Tel No.:- +977-9861939610'));

    const map = document.createElement('iframe');
    map.classList.add('map');
    map.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10082.200180984866!2d87.6688890113632!3d26.69339853252556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1628041622763!5m2!1sen!2snp" 
    map.width = '80%';
    map.height = '750';
    map.allowFullscreen = '';
    map.loading = 'lazy';
    contact.appendChild(map);

    return contact;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = text;

    return paragraph;
}

function loadContact(){
const main = document.querySelector('.main');
main.textContent = '';
main.appendChild(createContact());
}

export default loadContact;