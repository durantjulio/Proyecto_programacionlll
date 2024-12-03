// carrito.js

document.addEventListener('DOMContentLoaded', () => {
    const cartContent = document.getElementById('cart-content');
    const totalPriceDiv = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartContent.innerHTML = '';
        if (cart.length === 0) {
            cartContent.innerHTML = '<p>El carrito está vacío.</p>';
            totalPriceDiv.innerHTML = '';
            return;
        }

        let totalPrice = 0;

        cart.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="50" height="50" style="margin-right: 10px;">
                <p>${product.name} - $${product.price}</p>
                <button class="remove-button" data-index="${index}">Eliminar</button>
            `;
            cartContent.appendChild(productDiv);
            totalPrice += parseFloat(product.price);
        });

        totalPriceDiv.innerHTML = `<h2>Total: $${totalPrice.toFixed(2)}</h2>`;

        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    renderCart();
});