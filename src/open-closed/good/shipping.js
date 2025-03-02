class ShippingStrategy {
  calculate(order) {
    throw new Error("Method not implemented");
  }
}

class StandardShipping extends ShippingStrategy {
  calculate(order) {
    return 5 + order.items.length * 1;
  }
}

class ExpressShipping extends ShippingStrategy {
  calculate(order) {
    return 15 + order.items.length * 2;
  }
}

export { ShippingStrategy, StandardShipping, ExpressShipping };
