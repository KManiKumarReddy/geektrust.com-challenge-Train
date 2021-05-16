class Train {
  constructor() {
    this.trainAPreJoinRoute = ['CHN', 'SLM', 'BLR', 'KRN'];
    this.trainBPreJoinRoute = ['TVC','SRR','MAQ','MAO','PNE'];
    this.stationDistanceFromHyderabad = {
      'NGP': 400,
      'ITJ': 700,
      'BPL': 800,
      'AGA': 1300,
      'NDL': 1500,
      'PTA': 1800,
      'NJP': 2200,
      'GHY': 2700,
    }
    this.trainABogies = null;
    this.trainBBogies = null;
  }

  run() {
    if(!this.trainABogies || !this.trainBBogies){
      return;
    }
    process.stdout.write(`ARRIVAL TRAIN_A ENGINE ${this.trainABogies.join(' ')}\n`)
    process.stdout.write(`ARRIVAL TRAIN_B ENGINE ${this.trainBBogies.join(' ')}\n`)
    process.stdout.write(`DEPARTURE TRAIN_AB ENGINE ENGINE ${
      [... this.trainABogies, ... this.trainBBogies]
      .filter((station) => station !== 'HYB')
      .sort((station1, station2) => this.stationDistanceFromHyderabad[station2] - this.stationDistanceFromHyderabad[station1])
      .join(' ')
    }\n`);
  }


  processCommand(command){
    const args = command.split(' ');
    const train = args.shift();
    args.shift();
    if(train === 'TRAIN_A'){
      this.trainABogies = args.filter(station => !this.trainAPreJoinRoute.includes(station));
    }
    else if(train === 'TRAIN_B') {
      this.trainBBogies = args.filter(station => !this.trainBPreJoinRoute.includes(station));
    }
    this.run();
  }
}

module.exports = {
  Train
}