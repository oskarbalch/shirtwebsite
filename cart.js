// Sample JavaScript code to add items to a cart
const cartItems = []; // Initialize an empty cart

// Function to add an item to the cart
function addItemToCart(itemName, itemPrice) {
    const newItem = {
        name: itemName,
        price: itemPrice,
    };
    cartItems.push(newItem);
    alert(`${itemName} added to cart!`); // Display a message (you can customize this)
    // You can also update the cart display here if needed
}

// Function to handle button clicks
function handleButtonClick(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const itemName = event.target.getAttribute('data-item-name');
        const itemPrice = parseFloat(event.target.getAttribute('data-item-price'));
        addItemToCart(itemName, itemPrice);
    }
}

// Add a click event listener to the entire document to handle button clicks
document.addEventListener('click', handleButtonClick);
