let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'sports shoes nike',
        image: '1-zoom-desktop.jpg',
        price: 120,
        link: 'prdact 2/index2.html'
    },
    {
        id: 2,
        name: 'sports shoes adidas',
        image: '1-zoom-desktop (2).jpg',
        price: 170,
        link: 'prdact 6/index6.html'
    },
    {
        id: 3,
        name: 'tennis',
        image: 'TENNIS.jpg',
        price: 65,
        link: 'prdact 7/index7.html'
    },
    {
        id: 4,
        name: 'ball',
        image: 'BALL.jpg',
        price: 80,
        link: 'prdact 8/index8.html'
    },
    {
        id: 5,
        name: 'boxing gloves',
        image: 'BOXING 2.jpg',
        price: 40,
        link: 'prdact 9/index9.html'
    },
    {
        id: 6,
        name: ' gloves',
        image: 'GLOVES2.jpg',
        price: 50,
        link: 'prdact 10/index10.html'
    },
    {
        id: 7,
        name: ' iron weights',
        image: 'اثقال 2.jpg',
        price: 90,
        link: 'prdact 12/index12.html'
    },
    {
        id: 8,
        name: 'mans pajamas adidas',
        image: 'MAN.jpg',
        price: 130,
        link: 'prdact 4/index4.html'
    },
    {
        id: 9,
        name: 'mans pajamas puma',
        image: 'man 3.jpg',
        price: 105,
        link: 'prdact 5/index 5.html'
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}" style= "width: 80%; height:60%;">
            <div style="font-weight: bold; font-size:20px;" class="title">${value.name}</div>
            <div style="font-weight: bold; font-size:17px;" class="price">${value.price.toLocaleString() + "$"}</div>
            <button style="font-weight: bold; font-size:20px; background-color:#457b9d; border-radius: 20px; cursor: pointer; " onclick="addToCard(${key})">Add To Card</button>
            <a href="${value.link}">
                <br><br>
                <button style="font-weight: bold; font-size:20px; background-color:#457b9d; border-radius: 20px;cursor: pointer; ">More info</button>
            </a>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div style="font-weight: bold;">${value.name}</div>
                <div style="font-weight: bold;" >${value.price.toLocaleString()}</div>
                <div>
                    <button  style="font-weight: bold; border-radius: 20px; background-color: #FFF; width: 25px; height: 25px;" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button style="font-weight: bold; border-radius: 20px; background-color: #FFF; width: 25px; height: 25px;" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}