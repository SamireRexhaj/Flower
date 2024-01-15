let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const product = [
    {
        id: 0,
        image: 'shop0.png',
        title: 'Purple Bouquet',
        price: 45,
    },
    {
        id: 1,
        image: 'shop1.png',
        title: 'Colorful Bouquet',
        price: 35,
    },
    {
        id: 2,
        image: 'shop2.png',
        title: 'Nude Bouquet',
        price: 30,
    },
    {
        id: 3,
        image: 'shop3.png',
        title: 'Pink Bouquet',
        price: 50,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div>
                <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
                </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}