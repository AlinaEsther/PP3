const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = []; // Array para almacenar los productos en el carrito

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productItem = button.parentElement;
        const productName = productItem.querySelector('h2').textContent;
        const productPrice = productItem.querySelector('.price').textContent;
        const productImage = productItem.querySelector('img').src;

        const product = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        cart.push(product);
        updateCartDisplay();
        alert(`Producto "${productName}" agregado al carrito.`);
    });
});

function updateCartDisplay() {
    // Esta función actualizará la visualización del carrito
    console.log("Productos en el carrito:", cart);
    displayCart(); // Llama a la función para mostrar el carrito en la página
}

function displayCart() {
    const cartItemsElement = document.getElementById('cart-items');
    if (!cartItemsElement) return; // Si no existe el elemento, salir

    cartItemsElement.innerHTML = ''; // Limpiar el contenido anterior

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 50px; height: auto;">
            <span>${product.name} - ${product.price}</span>
        `;
        cartItemsElement.appendChild(cartItem);
    });
}
