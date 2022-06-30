class Cart {
  user: string;
  stripe: Stripe;
  // paypal: Paypal;

  constructor(user: string) {
    this.user = user;
    this.stripe = new Stripe(user);
    // this.paypal = new Paypal();
  }

  purchaseItem1(quantity: number) {
    this.stripe.makePayment(200 * quantity);
    // this.paypal.paypalPayment(200 * quantity, this.user);
  }

  purchaseItem2(quantity: number) {
    this.stripe.makePayment(100 * quantity);
    // this.paypal.paypalPayment(100 * quantity, this.user);
  }
}

class Stripe {
  user: string;

  constructor(user: string) {
    this.user = user;
  }

  makePayment(amount: number) {
    console.log(`${this.user} made a purchase of ${amount} by Stripe`);
  }
}

class Paypal {
  paypalPayment(amount: number, user: string) {
    console.log(`${user} made a purchase of ${amount} by PayPal`);
  }
}

const cart = new Cart('Chi');
cart.purchaseItem1(2);