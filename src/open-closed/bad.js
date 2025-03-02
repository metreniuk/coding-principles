import express from "express";
import bodyParser from "body-parser";

function calculateShippingCost(order) {
  let cost = 0;
  if (order.shipping === "standard") {
    cost = 5 + order.items.length * 1;
  } else if (order.shipping === "express") {
    cost = 15 + order.items.length * 2;
  } else {
    // To add a new method, you must modify this function!
    cost = 10 + order.items.length * 1.5;
  }
  return cost;
}

function calculateTotal(order) {
  const itemsTotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return itemsTotal + calculateShippingCost(order);
}

const app = express();
app.use(bodyParser.json());

app.post("/order/calculate", (req, res) => {
  const order = req.body; // { items: [{ price, quantity }], shipping: 'standard'|'express' }
  const total = calculateTotal(order);
  res.json({ total });
});

app.listen(3000, () => console.log("Server running on port 3000"));
