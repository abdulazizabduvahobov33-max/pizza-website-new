// BURGER MENU
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// FILTER
const filterButtons = document.querySelectorAll('.filter-btn');
const pizzaCards = document.querySelectorAll('.pizza-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.textContent.trim().toLowerCase();

    pizzaCards.forEach(card => {
      const cardCategory = card.dataset.category.toLowerCase();

      if (category === 'show all' || cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// + -
document.querySelectorAll('.plus').forEach(btn => {
  btn.addEventListener('click', () => {
    const countElem = btn.parentElement.querySelector('.count');
    countElem.textContent = parseInt(countElem.textContent) + 1;
  });
});

document.querySelectorAll('.minus').forEach(btn => {
  btn.addEventListener('click', () => {
    const countElem = btn.parentElement.querySelector('.count');
    let count = parseInt(countElem.textContent);
    if (count > 1) countElem.textContent = count - 1;
  });
});

// ADD TO CART
document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ name, price });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Добавлено в корзину 🛒");
  });
});

// CART PAGE
const cartItemsContainer = document.getElementById('cart-items');
const totalContainer = document.getElementById('total');

if (cartItemsContainer && totalContainer) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;

  cartItemsContainer.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(div);

    total += item.price;
  });

  totalContainer.textContent = "Total: $" + total.toFixed(2);
}