//GETTING HTML ELEMENTS
const productsSection = document.getElementById('product');
const cart = document.getElementById("cart");
const cartContainer = document.getElementById("cart-container");
const cartIcon = document.getElementById("cart-icon");
const cartTotalPrice = document.getElementById('cart-total');


//DATA
let cartItemsArray = [];
const products =  [
    {
       category: 'toiletries', 
        items: [
            {
                id: '1',
                name: 'Listerine Mouthwash Cool Mint 250 ml',
                price: 3120.00,
                image: 'img/mouthwash.webp',
                ratings: 5
            },
            {
                id: '2',
                name: 'Sensodyne Toothpaste Extra Whitening 75 ml ',
                price: 1380.00,
                image: 'img/paste.webp',
                ratings: 4
            },
            {
                id: '3',
                name: 'Dettol Anti-Bacterial Soap Original 160 g',
                price: 1045.00,
                image: 'img/dettol.webp',
                ratings: 3
            },
            {
                id: '4',
                name: 'Irish Spring Body Wash Deep Action Scrub 532 ml',
                price: 4550.00,
                image: 'img/gel.webp',
                ratings: 5
            },
            {
                id: '5',
                name: 'Boulos Rose Plus Toilet Tissue 2 Ply 12 Rolls',
                price: 1920.00,
                image: 'img/toliet.webp',
                ratings: 3
            },
            {
                id: '6',
                name: 'Ariel Machine Expert Detergent Powder Ultimate Clean 1.8 kg',
                price: 4650.00,
                image: 'img/ari.webp',
                ratings: 2
            }
        ]
    },
    {
        category: 'snacks',
        items: [
            {
                id: '7',
                name: 'Lay\'s Chips Nature 75 g',
                price: 1865.00,
                image: 'img/lay.webp',
                ratings: 3
            },
            {
                id: '8',
                name: 'Go Slo Cookies & Cream 320 ml',
                price: 3090.00,
                image: 'img/ice.webp',
                ratings: 4
            },
            {
                id: '9',
                name: 'Chin Chin (Cubes) - Semi-Medium Jar',
                price: 3200.00,
                image: 'img/chin.webp',
                ratings: 1
            },
            {
                id: '10',
                name: 'Reelfruit Coconut Flakes Sweetened 100 g',
                price: 1065.00,
                image: 'img/coconut.webp',
                ratings: 5
            },
            {
                id: '11',
                name: 'Dairy Milk Fruit & Nut 200 g',
                price: 3820.00,
                image: 'img/chocolate.jpg',
                ratings: 5
            },
            {
                id: '12',
                name: 'Skittles 37 g',
                price: 895.00,
                image: 'img/chocolate.jpg',
                ratings: 5
            }
        ]
    },
    {
        category: 'drinks',
        items: [
            {
                id: '13',
                name: 'Monster Ultra Energy Drink',
                price: 650,
                image: 'img/monster.webp',
                ratings: 5
            },
            {
                id: '14',
                name: 'Sandara Sparkling Rose Wine',
                price: 5000,
                image: 'img/drink6.webp',
                ratings: 5
            },
            {
                id: '15',
                name: 'RSchweppes Chapman Can 33 cl x6',
                price: 1030.00,
                image: 'img/chapman.webp',
                ratings: 5
            },
            {
                id: '16',
                name: 'Sky Vodka Passion Fruit 100 cl',
                price: 9210.00,
                image: 'img/sky.webp',
                ratings: 5
            },
            {
                id: '17',
                name: 'Farmfresh Yoghurt Strawberry 1 L',
                price: 2595.00,
                image: 'img/drink3.webp',
                ratings: 5
            },
            {
                id: '18',
                name: 'Andre Rose California Sparkling Wine 75 cl',
                price: 6030.00,
                image: 'img/drink7.webp',
                ratings: 5
            }
        ]
    }
]

//FUNCTIONS
function addToCart(item) {
    const cartItemExists = cartItemsArray.find((cartItem)=>{
        return cartItem.id === item.id
    });
    if(cartItemExists){
        cartItemsArray = cartItemsArray.map(cartItem =>{
            if(cartItem.id === item.id) {
                console.log('added 1');
                return {...cartItem, quantity:cartItem.quantity+1};
            }
            else {
                return cartItem
            }
        })
        console.log(cartItemsArray);
        loadCartItems();
        return
    }
   cartItemsArray.push({...item,quantity:1});
   console.log(cartItemsArray);
    loadCartItems();
}
function toggleCartHidden(){
    cartContainer.hidden = !cartContainer.hidden
}
function calculateCartTotal(cartArray) {
    const cartTotal = cartArray.reduce((accumulator,cartItem) => {
        return (cartItem.price*cartItem.quantity) + accumulator
    },0);
    return cartTotal
}
// Loop over cart data and create html elements for them 
// - it is a function because we want to call it multiple times
function loadCartItems (){
    //Clear previous content in the cart before adding new ones 
    cart.innerHTML = '';
    if(!cartItemsArray.length){
        cart.innerHTML = 'Your cart is currently empty'
    }
    cartItemsArray.forEach((item, i) =>{
    
    //creating HTML elements and adding classes for styles and setting content and attribute to our data
    let cartItem = document.createElement('div');
    cartItem.classList.add("cart-item");
    // cartItem S/N Element
    let cartItemNo = document.createElement("p");
    cartItemNo.textContent = i+1
    // cartItem image element
    let cartItemImage = document.createElement("img");
    cartItemImage.setAttribute('src',item.image);
    // cartItemName element
    let cartItemName = document.createElement("h3");
    cartItemName.classList.add("item-name");
    cartItemName.textContent = item.name;
     // cartItemquantity element
    let cartItemQuantity = document.createElement('p');
    cartItemQuantity.classList.add('quantity');
    cartItemQuantity.textContent = `${item.quantity}X${item.price}`;
    const cartTotal = calculateCartTotal(cartItemsArray);
    cartTotalPrice.textContent = `₦${cartTotal}`;

    //appending children elements to parents to structure them
    cartItem.appendChild(cartItemNo);
    cartItem.appendChild(cartItemImage);
    cartItem.appendChild(cartItemName);
    cartItem.appendChild(cartItemQuantity);
    cart.appendChild(cartItem);
    // console.log(cartItem, i);
    })}

// Loop over products data and create html elements for them
products.forEach((product,i) =>{
    //creating HTML elements and adding classes for styles and setting content and attribute to our data
    
   const category = document.createElement('div');
   category.classList.add('category', i);
   const categoryName = document.createElement('h2');
   const productBox = document.createElement('div');
   categoryName.textContent = product.category;
   categoryName.classList.add('text');
   productBox.classList.add('product_box');

   //looping over items in each category and creating elements for them and adding to the page
   product.items.forEach((item,i) =>{

    //creating HTML elements and adding classes for styles and setting content and attribute to our data
    
    //products card div
    const productCard = document.createElement('div');
    productCard.classList.add('product_card');

    //image container div
    const productImgContainer  = document.createElement('div');
    productImgContainer.classList.add('product_img');

    //image in image conainer div
    const productImg  = document.createElement('img');
    productImg.setAttribute('src', item.image);


    //small card. May we not be small
    const smallCard = document.createElement('div');
    smallCard.classList.add('small_card')
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fa', 'fa-heart');
    
    //product info (price, name,....)
    const productInfo = document.createElement('div');
    productInfo.classList.add('product_info')
    const productName = document.createElement('h2');
    productName.textContent = item.name;
    const productPrice = document.createElement('h3');
    productPrice.textContent = item.price;

    //creating multiple icons with a for loop because we don't want to do it manually
    const productIcon = document.createElement('div');
    for(let index = 0; index < item.ratings; index++){
        const starIcon = document.createElement('i');
        starIcon.classList.add('fa', 'fa-star');
        // if(index<4){
        //     starIcon.classList.add('fa', 'fa-star');
        // }
        // else{
        //     starIcon.classList.add('fa-solid', 'fa-star-half-stroke');
        // }
        productIcon.appendChild(starIcon);
    }
    productIcon.classList.add('product_icon');

    const addToCartBtn = document.createElement('a');
    addToCartBtn.onclick = () =>{
        addToCart(item)
    }
    addToCartBtn.textContent = 'ADD TO CART'
    addToCartBtn.classList.add('product_btn');

    //appending children elements to parents to structure them
    productImgContainer.appendChild(productImg);
    smallCard.appendChild(heartIcon);
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productCard.appendChild(productImgContainer);
    productCard.appendChild(smallCard);
    productCard.appendChild(productInfo);
    productCard.appendChild(productIcon);
    productCard.appendChild(addToCartBtn);
    productBox.appendChild(productCard)
   })
   category.appendChild(categoryName);
    category.appendChild(productBox);
    productsSection.appendChild(category)   
})



//Run on load
loadCartItems();


//Event Listeners
cartIcon.onclick = ()=>{
    toggleCartHidden()
}

// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");
// menu.onclick =() => {
//     menu.classList.toggle("fa-xmark");
//     navbar.classList.toggle("active");
// }
//for each product
//create h2 for product category name -> category -> classname text
// create div for category items-> items array classname -> product box
//productbox has multiple items which we represent with an array
// for each item in category -> items[index] -> productcard
//create h2, h3 for product name and price
// create imoage tag and let the src attribute be the item image
