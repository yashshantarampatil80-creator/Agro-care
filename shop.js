// Select elements
const iconCart = document.querySelector('.icon-cart');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.close');
const listProduct = document.querySelector('.listproduct');
const listCart = document.querySelector('.listcart');
const cartCount = document.querySelector('.icon-cart span');

// Cart data
let cart = [];

// Toggle cart sidebar
iconCart.addEventListener('click', () => {
  body.classList.toggle('showcart');
});

closeBtn.addEventListener('click', () => {
  body.classList.remove('showcart');
});

// Add to cart functionality
listProduct.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    let productItem = e.target.closest('.item');
    let productName = productItem.querySelector('h2').innerText;
    let productPrice = parseFloat(productItem.querySelector('.price').innerText.replace('$', ''));
    let productImg = productItem.querySelector('img').src;

    // Check if product already in cart
    let existing = cart.find(item => item.name === productName);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        name: productName,
        price: productPrice,
        img: productImg,
        quantity: 1
      });
    }
    updateCart();
  }
});

// Update cart display
function updateCart() {
  listCart.innerHTML = '';
  let totalItems = 0;

  cart.forEach((item, index) => {
    totalItems += item.quantity;

    let cartItem = document.createElement('div');
    cartItem.classList.add('item');
    cartItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div>${item.name}</div>
      <div>$${item.price}</div>
      <div class="quantity">
        <span class="minus" data-index="${index}">-</span>
        <span>${item.quantity}</span>
        <span class="plus" data-index="${index}">+</span>
      </div>
    `;
    listCart.appendChild(cartItem);
  });

  cartCount.innerText = totalItems;

  // Add event listeners for quantity controls
  document.querySelectorAll('.minus').forEach(btn => {
    btn.addEventListener('click', () => {
      let index = btn.dataset.index;
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }
      updateCart();
    });
  });

  document.querySelectorAll('.plus').forEach(btn => {
    btn.addEventListener('click', () => {
      let index = btn.dataset.index;
      cart[index].quantity++;
      updateCart();
    });
  });
}