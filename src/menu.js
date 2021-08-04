function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuHead = document.createElement('p');
    menuHead.classList.add('menuHead');
    menuHead.textContent = 'Menu\'s';
    menu.append(menuHead);

    // let foods = [{name:'Burger',image:'./burger.png',description:'This is tasty Burger',price:'$ 12.50'},
    // {name:'Pizza',image:'./pizza.png',description:'This is tasty Burger',price:'$ 12.50'},
    // {name:'Coke',image:'./coke.png',description:'This is tasty Burger',price:'$ 12.50'}]

    const foodContainer = document.createElement('div');
    foodContainer.classList.add('foodContainer');
    menu.appendChild(foodContainer);

    let foodName1 = 'Burger';
    foodContainer.appendChild(createFood(foodName1,`This is Very Testy ${foodName1}`,'$2'));

    let foodName2 = 'Pizza';
    foodContainer.appendChild(createFood(foodName2,`This is Very Testy ${foodName2}`,'$5'));

    let foodName3 = 'Ramen';
    foodContainer.appendChild(createFood(foodName3,`This is Very Testy ${foodName3}`,'$1'));

    let foodName4 = 'Steak';
    foodContainer.appendChild(createFood(foodName4,`This is Very Testy ${foodName4}`,'$2'));

    return menu;
}

function createFood(food,description,price){

    const foods = document.createElement('div');
    foods.classList.add('foods');

    const image = document.createElement('img');
    image.src = `./images/${food}.png`;
    image.width = 150;
    image.height = 150;
    image.classList.add('image');
    image.alt =`${food} was here.`

    const foodName= document.createElement('p');
    foodName.classList.add('foodName');
    foodName.textContent = food;

    const des= document.createElement('p');
    des.classList.add('description');
    des.textContent = description;

    const prc = document.createElement('p');
    prc.classList.add('price');
    prc.textContent = price;

    foods.appendChild(image);
    foods.appendChild(foodName);
    foods.appendChild(des);
    foods.appendChild(prc);

return foods;
}


function loadMenu(){
    const main = document.querySelector('.main');
    main.textContent = '';//this line will remove the content of others tab.
    main.appendChild(createMenu());
}

export default loadMenu;
