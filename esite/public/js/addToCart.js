const cartIcon = document.getElementById('cart');
const addButton = document.getElementsByClassName('add');
const shoppingBag = document.getElementById('ShoppingBag');

class Cart
{
    constructor(number)
    {
        this.number = number;
    }

    getNumber(){
        return this.number;
    }

    setNumber(number){
        this.number +=number;
    }
}

const c = new Cart(0);
const cartArray = [];
const addItem = (e) =>{
    c.setNumber(1);
    console.log(c);
    cartIcon.innerHTML = c.getNumber();
    cartArray.push(e.target.parentElement);
    shoppingBag.innerText += e.target.parentElement.childNodes[1].innerHTML;
    shoppingBag.innerHTML += '<br>'
    console.log(cartArray);
}


addButton[0].addEventListener('click',addItem);
addButton[1].addEventListener('click',addItem);