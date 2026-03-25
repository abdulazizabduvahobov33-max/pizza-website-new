const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let orders = [];

// GET — получить все заказы
app.get('/orders', (req, res) => {
  res.json(orders);
});

// POST — создать заказ
app.post('/order', (req, res) => {
  const order = req.body;

  order.id = Date.now();
  orders.push(order);

  console.log("🔥 Новый заказ:", order);

  res.json({ message: "Order received ✅" });
});

// запуск сервера
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});