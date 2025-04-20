// Product Data
const products = {
    lipsticks: [
        { id: 1, name: "Matte Red Lipstick", price: 499, image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 2, name: "Nude Shine Lipstick", price: 599, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 3, name: "Berry Gloss Lipstick", price: 399, image: "https://images.unsplash.com/photo-1615362748664-1e7d8a5d7d3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 4, name: "Coral Crush Lipstick", price: 449, image: "https://images.unsplash.com/photo-1615362748808-b5b56b849b3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 5, name: "Pink Pout Lipstick", price: 549, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 6, name: "Bold Burgundy Lipstick", price: 649, image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 7, name: "Mauve Magic Lipstick", price: 499, image: "https://images.unsplash.com/photo-1607602132700-0682588ea65b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 8, name: "Peachy Keen Lipstick", price: 399, image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 9, name: "Ruby Red Lipstick", price: 699, image: "https://images.unsplash.com/photo-1596704017256-17955e90e3e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 10, name: "Plum Perfect Lipstick", price: 599, image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
    ],
    watches: [
        { id: 11, name: "Classic Leather Watch", price: 2499, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 12, name: "Digital Sports Watch", price: 1799, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 13, name: "Rose Gold Chronograph", price: 3499, image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 14, name: "Minimalist Silver Watch", price: 1999, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 15, name: "Smart Fitness Tracker", price: 2999, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 16, name: "Luxury Gold Watch", price: 5999, image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 17, name: "Waterproof Dive Watch", price: 3999, image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 18, name: "Vintage Pocket Watch", price: 2599, image: "https://images.unsplash.com/photo-1518134346374-184f9d21cea4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 19, name: "Skeleton Mechanical Watch", price: 4499, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 20, name: "Military Style Watch", price: 2299, image: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
    ],
    earrings: [
        { id: 21, name: "Gold Hoop Earrings", price: 1299, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 22, name: "Diamond Stud Earrings", price: 3499, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 23, name: "Pearl Drop Earrings", price: 1999, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 24, name: "Silver Leaf Earrings", price: 899, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 25, name: "Chandelier Earrings", price: 1599, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 26, name: "Huggie Earrings", price: 799, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 27, name: "Gemstone Dangle Earrings", price: 2299, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 28, name: "Minimalist Gold Earrings", price: 999, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 29, name: "Statement Tassel Earrings", price: 1499, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 30, name: "Rose Gold Ear Cuffs", price: 1199, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
    ],
    footwear: [
        { id: 31, name: "White Sneakers", price: 1999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 32, name: "Leather Loafers", price: 2499, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 33, name: "Running Shoes", price: 2999, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 34, name: "Casual Slip-ons", price: 1499, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 35, name: "High Heels", price: 1799, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 36, name: "Ankle Boots", price: 3499, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 37, name: "Flip Flops", price: 499, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 38, name: "Formal Oxfords", price: 2799, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 39, name: "Canvas Shoes", price: 1299, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 40, name: "Hiking Boots", price: 3999, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
    ]
};

// Cart functionality
let cart = [];

// DOM Elements
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const closeModal = document.querySelector('.close');

// Display products
function displayProducts() {
    displayCategoryProducts('lipsticks', 'lipstick-grid');
    displayCategoryProducts('watches', 'watch-grid');
    displayCategoryProducts('earrings', 'earring-grid');
    displayCategoryProducts('footwear', 'footwear-grid');
}

function displayCategoryProducts(category, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    
    products[category].forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">₹${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        grid.appendChild(productCard);
    });
}

// Cart functions
function addToCart(productId) {
    // Find product in all categories
    let product;
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }
    
    if (product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }
        updateCart();
    }
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart modal
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>₹${item.price} x ${item.quantity}</p>
            </div>
            <p class="cart-item-price">₹${item.price * item.quantity}</p>
            <button class="remove-item" data-id="${item.id}">×</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total;
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    loadCart();
    
    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
        
        if (e.target.classList.contains('remove-item')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
    });
    
    // Cart modal
    document.querySelector('a[href="#cart"]').addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
        cartModal.style.display = 'none';
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#cart') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Shop now button
    document.querySelector('.shop-now').addEventListener('click', () => {
        document.querySelector('#lipsticks').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
