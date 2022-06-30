abstract class Shape {
  abstract get area():number;
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  setHeight(height:number) {
    this.height = height;
  }

  setWidth(width:number) {
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }
}

class Square extends Shape {
  length: number;

  constructor(length: number) {
    super();
    this.length = length;
  }

  setLength(length: number) {
    this.length = length;
  }

  get area() {
    return this.length ** 2;
  }
}

function printArea(shapes: Shape[]) {
  shapes.forEach(shape => {
    console.log(shape.area);
  });
}

const shapes = [new Rectangle(5, 10), new Rectangle(2, 2), new Square(5)];

printArea(shapes);