const fs = require('fs');
const readline = require('readline');
const { Train } = require('./Train');

class GeekTrust {
  constructor() {
    this.train = new Train();
  }
  main = () => {
    const fileName = process.argv[2];
    const lineReader = readline.createInterface({
      input: fs.createReadStream(fileName),
    });

    lineReader.on('line', (line) => {
      this.train.processCommand(line);
    });
  };
};

let geekTrust = new GeekTrust();
geekTrust.main();
