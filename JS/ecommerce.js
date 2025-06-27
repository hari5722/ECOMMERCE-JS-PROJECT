let allproducts = [];

async function fetchingproducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        allproducts = await response.json();
        displayProducts(allproducts);
        if (typeof updateCartCountUI === 'function') {
            updateCartCountUI();
        }
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function displayProducts(products) {
    const container = document.getElementById('Products-container');
    if (!container) {
        console.error("Products-container not found.");
        return;
    }
    container.innerHTML = "";
    products.forEach(product => {
        const box = document.createElement('div');
        box.className = 'box';

        box.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <br>
            <h3>${product.title.slice(0, 15)}...</h3>
            <p>${product.description.slice(0, 110)}...</p>
            <hr>
            <p>$${product.price.toFixed(2)}</p>
            <hr>
            <div class="addcart">
                <button class="details">Details</button>
                <button class="addtocart"
                    data-id="${product.id}"
                    data-title="${product.title}"
                    data-image="${product.image}"
                    data-price="${product.price}">Add To Cart</button>
            </div>`;
        container.appendChild(box);
    });
}

document.querySelectorAll('.Productbtns button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        if (category === 'all') {
            displayProducts(allproducts);
        } else {
            const filtered = allproducts.filter(p => p.category.toLowerCase() === category);
            displayProducts(filtered);
        }
    });
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('addtocart')) {
        const productId = e.target.getAttribute('data-id');
        const productTitle = e.target.getAttribute('data-title');
        const productImage = e.target.getAttribute('data-image');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));

        if (typeof addItemToCart === 'function') {
            addItemToCart({
                id: productId,
                title: productTitle,
                image: productImage,
                price: productPrice
            });
        } else {
            console.error("addItemToCart function not found. Is cartService.js loaded correctly?");
        }
    }
});

document.addEventListener('DOMContentLoaded', fetchingproducts);
