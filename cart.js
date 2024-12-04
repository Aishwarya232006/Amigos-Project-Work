// Initialize the cart as an empty array
let cart = [];

// Get the elements from the DOM
const emptyCartContainer = document.getElementById('emptyCartContainer');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const shopNowBtn = document.querySelector('.shop-now-btn');

// Function to update the cart display
function updateCartDisplay() {
    if (cart.length === 0) {
        emptyCartContainer.style.display = 'block'; // Show empty cart message
        cartItemsContainer.style.display = 'none'; // Hide cart items section
    } else {
        emptyCartContainer.style.display = 'none'; // Hide empty cart message
        cartItemsContainer.style.display = 'block'; // Show cart items section

        // Clear previous cart items
        cartItemsContainer.innerHTML = '';

        // Loop through the cart array and display items
        cart.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p><strong>Item:</strong> ${item.name}</p>
                <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
                <button class="remove-item-btn" data-item="${item.name}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Add event listeners to remove buttons
        const removeButtons = document.querySelectorAll('.remove-item-btn');
        removeButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const itemName = e.target.getAttribute('data-item');
                removeFromCart(itemName);
            });
        });
    }
}

// Function to add an item to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay(); // Update the display after adding an item
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    cart = cart.filter((item) => item.name !== itemName);
    updateCartDisplay(); // Update the display after removing an item
}

// Function to clear the cart (if needed)
function clearCart() {
    cart = [];
    updateCartDisplay(); // Update the display after clearing the cart
}

// Optional: Event listener for the 'Shop Now' button
shopNowBtn.addEventListener('click', () => {
    // Simulating adding items to the cart for demonstration
    addToCart('Sofa', 499.99);
    addToCart('Dining Table', 299.99);
});

// Call the updateCartDisplay function when the page loads
window.onload = updateCartDisplay;
