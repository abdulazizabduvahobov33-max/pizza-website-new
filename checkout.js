function submitOrder() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (!name || !phone || !address) {
    alert("Заполни все поля ❗");
    return;
  }

  if (cart.length === 0) {
    alert("Корзина пустая 🛒");
    return;
  }

  const order = {
    name,
    phone,
    address,
    cart
  };

  console.log("ORDER:", order);

  localStorage.setItem('orderData', JSON.stringify(order));
  window.location.href = "payment.html";
}