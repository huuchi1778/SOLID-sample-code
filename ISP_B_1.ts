interface Printer {
  print():void;
  scan():void;
  fax(faxNumber: string):void;
  copy():void;
}

class SimplePrinter implements Printer {
  print() {
    console.log('Printing...');
  }

  copy() {
    console.log('Copying...');
  }

  scan() {
    throw new Error('ERROR: Cannot scan!');
  }

  fax(faxNumber: string) {
    throw new Error(`ERROR: Cannot fax to this address ${faxNumber}`);
  }
}

const myPrinter = new SimplePrinter();