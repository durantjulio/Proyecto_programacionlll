document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const suggestions = document.getElementById('suggestions');
    const products = document.querySelectorAll('.product');

    // Función para mostrar sugerencias
    const showSuggestions = (filter) => {
        suggestions.innerHTML = ''; // Limpiar sugerencias anteriores
        let hasSuggestions = false;

        products.forEach(product => {
            const productName = product.getAttribute('data-product-name').toLowerCase();
            const productUrl = product.getAttribute('data-product-url');

            if (productName.includes(filter)) {
                hasSuggestions = true;
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = productName;
                suggestionItem.onclick = () => {
                    window.location.href = productUrl; // Redirigir al producto
                };
                suggestions.appendChild(suggestionItem);
            }
        });

        suggestions.style.display = hasSuggestions ? 'block' : 'none'; // Mostrar u ocultar sugerencias
    };

    // Agregar evento al botón de búsqueda
    searchButton.addEventListener('click', () => {
        const filter = searchInput.value.toLowerCase();
        showSuggestions(filter);
    });

    // Agregar evento al input de búsqueda
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        showSuggestions(filter);
    });

    // Ocultar sugerencias al hacer clic fuera
    document.addEventListener('click', (event) => {
        if (!suggestions.contains(event.target) && event.target !== searchInput) {
            suggestions.style.display = 'none';
        }
    });
});