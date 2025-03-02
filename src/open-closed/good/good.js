import express from "express";
import bodyParser from "body-parser";
import { StandardShipping, ExpressShipping } from "./shipping";
import { OrderService } from "./order-service";

const app = express();
app.use(bodyParser.json());

app.post("/order/calculate", (req, res) => {
  const order = req.body; // { items: [{ price, quantity }], shipping: 'standard'|'express' }
  let strategy =
    order.shipping === "express"
      ? new ExpressShipping()
      : new StandardShipping();
  const orderService = new OrderService(strategy);
  const total = orderService.calculateTotal(order);
  res.json({ total });
});

app.listen(3000, () => console.log("Server running on port 3000"));
