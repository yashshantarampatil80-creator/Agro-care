// Simple cart array to store items
let cart = [];

// Function to add product to cart
function addToCart(productName, price) {
  // Add product to cart array
  cart.push({ name: productName, price: price });

  // Show notification
  const notification = document.getElementById("cart-notification");
  notification.innerText = `${productName} added to cart (₹${price})`;
  notification.style.display = "block";

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);

  // Debug: log cart in console
  console.log("Cart:", cart);
}

// Simple Add to Cart Notification
function addToCart(productName, price) {
  const notification = document.getElementById("cart-notification");
  notification.innerText = `${productName} added to cart (₹${price})`;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}