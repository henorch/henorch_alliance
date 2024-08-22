
const cartkey = 'shoppingCart';



function addItemToCart(product){
    let cart =  JSON.parse(localStorage.getItem(cartkey)) || []

    const existingItem =  cart.findIndex(item => item.id === product.id);

    if(existingItem !== -1){
        cart[existingItem].quantity += (product.quantity || 1)
    }else{
        cart.push({
            ...product,
            quantity: product.quantity ||1
        })
    }
    localStorage.setItem(cartkey, JSON.stringify(cart))
    
    
    
}



function removeItemFromCart(id){
    let cart = JSON.parse(localStorage.getItem(cartkey)) || []

    cart = cart.filter(item => item.id !== id);

    localStorage.setItem(cartkey, JSON.stringify(cart))
}


export { addItemToCart, removeItemFromCart};