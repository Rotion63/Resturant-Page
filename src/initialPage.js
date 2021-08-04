import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function header(){
  const header = document.createElement('div');
  header.classList.add('header');

  header.appendChild(navMenu());
  return header;
}

function navMenu(){
  const navMenu = document.createElement('div');
  navMenu.classList.add('navMenu');

  const homeButton = document.createElement('button');
  homeButton.classList.add('navButton');
  homeButton.textContent = 'Home';

  homeButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(homeButton);
    loadHome();
  })


  const menuButton = document.createElement('button');
  menuButton.classList.add('navButton');
  menuButton.textContent = 'Menu';

  menuButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    loadMenu();
  })


  const contactButton = document.createElement('button');
  contactButton.classList.add('navButton');
  contactButton.textContent = 'Contact';

  contactButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(contactButton);
    loadContact();
  })

  navMenu.appendChild(homeButton);
  navMenu.appendChild(menuButton);
  navMenu.appendChild(contactButton);

  return navMenu;
}

function setActiveButton(button){
  const navList = document.querySelectorAll('.navButton');

  navList.forEach(button => {
    if(button !== this){
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
}

function createMain(){
  const main = document.createElement('div');
  main.classList.add('main');
  main.textContent = '';

  return main;
}

function footer(){
  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'Created By Madhav Prasad Guragain';

  return footer;
}

function initialPageLoad(){
  const content = document.getElementById('content');

  content.appendChild(header());
  content.appendChild(createMain());
  content.appendChild(footer());

  document.querySelector('.navButton')//it will select the first element with .navButton class i.e. homeButton;
  loadHome();
}

export default initialPageLoad;