<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FashionHub - Your Style Destination</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">
            <h1>FashionHub</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#lipsticks">Lipsticks</a></li>
                <li><a href="#watches">Watches</a></li>
                <li><a href="#earrings">Earrings</a></li>
                <li><a href="#footwear">Footwear</a></li>
                <li><a href="#cart"><i class="fas fa-shopping-cart"></i> <span id="cart-count">0</span></a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h2>Discover Your Style</h2>
                <p>Shop the latest trends in lipsticks, watches, earrings, and footwear</p>
                <button class="shop-now">Shop Now</button>
            </div>
        </section>

        <section id="lipsticks" class="product-section">
            <h2>Lipsticks</h2>
            <div class="product-grid" id="lipstick-grid">
                <!-- Lipstick products will be added by JavaScript -->
            </div>
        </section>

        <section id="watches" class="product-section">
            <h2>Watches</h2>
            <div class="product-grid" id="watch-grid">
                <!-- Watch products will be added by JavaScript -->
            </div>
        </section>

        <section id="earrings" class="product-section">
            <h2>Earrings</h2>
            <div class="product-grid" id="earring-grid">
                <!-- Earring products will be added by JavaScript -->
            </div>
        </section>

        <section id="footwear" class="product-section">
            <h2>Footwear</h2>
            <div class="product-grid" id="footwear-grid">
                <!-- Footwear products will be added by JavaScript -->
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>FashionHub is your one-stop destination for all your fashion needs.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#lipsticks">Lipsticks</a></li>
                    <li><a href="#watches">Watches</a></li>
                    <li><a href="#earrings">Earrings</a></li>
                    <li><a href="#footwear">Footwear</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: info@fashionhub.com</p>
                <p>Phone: +91 9876543210</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 FashionHub. All Rights Reserved.</p>
        </div>
    </footer>

    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Your Shopping Cart</h2>
            <div id="cart-items">
                <!-- Cart items will be added here -->
            </div>
            <div class="cart-total">
                <p>Total: ₹<span id="cart-total">0</span></p>
                <button id="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
