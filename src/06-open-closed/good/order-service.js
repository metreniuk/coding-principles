class OrderService {
  constructor(shippingStrategy) {
    this.shippingStrategy = shippingStrategy;
  }
  calculateTotal(order) {
    const itemsTotal = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shippingCost = this.shippingStrategy.calculate(order);
    return itemsTotal + shippingCost;
  }
}

export { OrderService };
