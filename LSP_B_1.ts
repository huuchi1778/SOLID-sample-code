class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height:number) {
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

class Square extends Rectangle {
  setHeight(height: number) {
    this.width = height;
    this.height = height;
  }

  setWidth(width: number) {
    this.width = width;
    this.height = width;
  }
}

const rec1 = new Rectangle(10, 2);
rec1.setWidth(11);
const square = new Square(5, 5);
square.setWidth(6);
console.log(square.area);