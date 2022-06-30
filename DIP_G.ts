class Cart {
  paymentProcessor: any;

  constructor(paymentProcessor: any) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseItem1(quantity: number) {
    this.paymentProcessor.makePayment(200 * quantity);
  }

  purchaseItem2(quantity: number) {
    this.paymentProcessor.makePayment(100 * quantity);
  }
}

class StripePaymentProcessor {
  user: string;
  stripe: Stripe;

  constructor(user: string) {
    this.user = user;
    this.stripe = new Stripe(this.user);
  }

  makePayment(amount:number) {
    this.stripe.stripePayment(amount);
  }
}

class PaypalPaymentProcessor {
  user: string;
  payal: Paypal;

  constructor(user:string) {
    this.user = user;
    this.payal = new Paypal();
  }

  makePayment(amount: number) {
    this.payal.paypalPayment(amount, this.user);
  }


}

class Stripe {
  user: string;

  constructor(user: string) {
    this.user = user;
  }

  stripePayment(amount: number) {
    console.log(`${this.user} made a purchase of ${amount} by Stripe`);
  }
}

class Paypal {
  paypalPayment(amount: number, user: string) {
    console.log(`${user} made a purchase of ${amount} by PayPal`);
  }
}

const cart = new Cart(new StripePaymentProcessor('Chi'));
// const cart = new Cart(new PaypalPaymentProcessor('Chi'));
cart.purchaseItem1(1);