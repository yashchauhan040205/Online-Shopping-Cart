

let cart = [];


const addProduct = (productName, price) => {
    
    const existingProduct = cart.find(product => product.productName === productName);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ productName, price, quantity: 1 }); 
    }

    updateCart();
};


const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
};


const removeProduct = (productName) => {
    cart = cart.filter(product => product.productName !== productName);
    updateCart();
};


const updateCart = () => {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; 

    cart.forEach(({ productName, price, quantity }) => {
        const li = document.createElement('li');
        li.innerHTML = `Product: ${productName}, Price: $${price}, Quantity: ${quantity}`;
        cartItemsList.appendChild(li);
    });

 
    const totalPrice = calculateTotal();
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
};


const clearCart = () => {
    cart = [];
    updateCart();
};


const logCartDetails = () => {
    cart.forEach(({ productName, price, quantity }) => {
        console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);
    });
};
