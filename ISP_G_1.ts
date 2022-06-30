interface Printer {
  print():void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(faxNumber: string): void;
}

interface Coppier {
  copy():void;
}

class SimplePrinter implements Printer, Coppier {
  print() {
    console.log('Printing...');
  }

  copy() {
    console.log('Copying...');
  }
}

class SuperPrinter implements Printer, Scanner, Fax, Coppier {
  print() {
    console.log('Printing...');
  }

  copy() {
    console.log('Copying...');
  }

  scan() {
    console.log('Scanning...');
  }

  fax(faxNumber: string) {
    console.log(`Faxing to this ${faxNumber}...`);
  }
}

