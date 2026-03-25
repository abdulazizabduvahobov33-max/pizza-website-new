async function payNow() {
  const card = document.getElementById('cardNumber').value;
  const expiry = document.getElementById('expiry').value;
  const cvv = document.getElementById('cvv').value;
  const status = document.getElementById('status');

  if (!card || !expiry || !cvv) {
    alert("Заполни все поля ❗");
    return;
  }

  status.textContent = "Processing payment... ⏳";

  const order = JSON.parse(localStorage.getItem('orderData'));

  try {
    const res = await fetch('http://localhost:3000/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });

    const data = await res.json();

    console.log("Ответ сервера:", data);

    status.textContent = "Payment successful ✅";

    localStorage.removeItem('cart');
    localStorage.removeItem('orderData');

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);

  } catch (err) {
    status.textContent = "Ошибка сервера ❌";
    console.error(err);
  }
}