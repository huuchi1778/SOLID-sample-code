class Bird {
  fly() {
    console.log('I can fly');
  }
}

class Eagle extends Bird {
  attack() {
    console.log('I can attack!');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error(`I can't fly`);
  }

  swim() {
    console.log('I can swim');
  }
}

function makeBirdFly(bird: Bird) {
  bird.fly();
}

makeBirdFly(new Eagle());

makeBirdFly(new Bird());
makeBirdFly(new Penguin());
