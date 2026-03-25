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
// ДОБАВЛЕНИЕ В КОРЗИНУ
const orderButtons = document.querySelectorAll('.order-btn');

orderButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // проверка есть ли уже такой товар
    const existing = cart.find(item => item.name === name);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Добавлено в корзину 🛒");
  });
});


// ОТРИСОВКА КОРЗИНЫ
const cartItemsContainer = document.getElementById('cart-items');
const totalContainer = document.getElementById('total');

if (cartItemsContainer) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price * item.quantity;

      const div = document.createElement('div');
      div.className = "flex justify-between items-center bg-[#1a0502] p-4 rounded mb-2";

      div.innerHTML = `
        <div>
          <h2>${item.name}</h2>
          <p>$${item.price} x ${item.quantity}</p>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="changeQty(${index}, -1)">-</button>
          <button onclick="changeQty(${index}, 1)">+</button>
          <button onclick="removeItem(${index})">❌</button>
        </div>
      `;

      cartItemsContainer.appendChild(div);
    });

    totalContainer.textContent = "Total: $" + total.toFixed(2);
  }

  // изменить количество
  window.changeQty = (index, amount) => {
    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  };

  // удалить товар
  window.removeItem = (index) => {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  };

  renderCart();
}