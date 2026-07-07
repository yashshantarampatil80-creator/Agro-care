// Crop guidance data
const guidanceData = {
  wheat: "Use Urea fertilizer and apply fungicide for rust prevention.",
  rice: "Apply DAP fertilizer and keep fields flooded for better yield.",
  cotton: "Use potash fertilizer and pesticide spray for bollworm control.",
  sugarcane: "Apply nitrogen fertilizer and ensure regular irrigation."
};

// Show guidance based on crop selection
function showGuidance() {
  const crop = document.getElementById("cropSelect").value;
  const guidanceText = document.getElementById("guidanceText");

  if (crop && guidanceData[crop]) {
    guidanceText.textContent = guidanceData[crop];
  } else {
    guidanceText.textContent = "Please select a crop to get guidance.";
  }
}

// Cart functionality
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}
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
