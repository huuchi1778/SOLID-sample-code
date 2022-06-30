class FlyingBird {
  fly() {
    console.log('I can fly');
  }
}

class SwimmingBird {
  swim() {
    console.log('I can swim');
  }
}

class Eagle extends FlyingBird {
  attack() {
    console.log('I can attack!');
  }
}

class Penguin extends SwimmingBird {
}

function makeBirdFly(bird: FlyingBird) {
  bird.fly();
}

function makeBirdSwim(bird: SwimmingBird) {
  bird.swim();
}

makeBirdFly(new Eagle());

makeBirdSwim(new SwimmingBird());
makeBirdSwim(new Penguin());
