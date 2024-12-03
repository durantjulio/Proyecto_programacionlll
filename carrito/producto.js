// producto.js

document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = button.getAttribute('data-product-price');
            const productImageUrl = button.getAttribute('data-product-image'); // Obtener la URL de la imagen

            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImageUrl // Incluir la URL de la imagen en el objeto del producto
            };

            addToCart(product);
        });
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} ha sido agregado al carrito.`);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const specsButtons = document.querySelectorAll('.specs-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = button.getAttribute('data-product-price');

            const product = {
                id: productId,
                name: productName,
                price: productPrice
            };

            addToCart(product);
        });
    });

    specsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            showSpecifications(productId);
        });
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} ha sido agregado al carrito.`);
    }

    function showSpecifications(productId) {
        let specs = '';
        switch (productId) {
            case '1':
                specs = '<strong>Producto 1:</strong> <br> Procesador: Intel i7 <br> RAM: 16GB <br> Almacenamiento: 512GB SSD';
                break;
            case '2':
                specs = '<strong>Producto 2:</strong> <br> Procesador: Intel i5 <br> RAM: 8GB <br> Almacenamiento: 256GB SSD';
                break;
            case '3':
                specs = '<strong>Producto 3:</strong> <br> Procesador: Intel i7 <br> RAM: 16GB <br> Almacenamiento: 512GB SSD';
                break;
            case '4':
                specs = '<strong>Producto 4:</strong> <br> Procesador: Intel i5 <br> RAM: 8GB <br> Almacenamiento: 256GB SSD';
                break;
            case '5':
                specs = '<strong>Producto 5:</strong> <br> Procesador: Intel i7 <br> RAM: 16GB <br> Almacenamiento: 512GB SSD';
                break;
            case '6':
                specs = '<strong>Producto 6:</strong> <br> Procesador: Intel i5 <br> RAM: 8GB <br> Almacenamiento: 256GB SSD';
                break;    
            case '7':
                specs = '<strong>Producto 7:</strong> <br> Procesador: Intel i7 <br> RAM: 16GB <br> Almacenamiento: 512GB SSD';
                break;
            case '8':
                specs = '<strong>Producto 8:</strong> <br> Procesador: Intel i5 <br> RAM: 8GB <br> Almacenamiento: 256GB SSD';
                break;
            // Agrega más casos para otros productos
            default:
                specs = 'Especificaciones no disponibles.';
        }
        document.getElementById('specsContent').innerHTML = specs;
        const modal = new bootstrap.Modal(document.getElementById('specsModal'));
        modal.show();
    }
});
