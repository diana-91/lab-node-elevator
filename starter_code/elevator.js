class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.clear = '';
  }

  start() {
    this.clear = setInterval(() => {
      this.update();
    },1000);
  }
  stop() {
    clearInterval(this.clear);
  }
  update() {
    this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if(this.floor >=0 && this.floor < 10){
      this.floor ++;
      this.direction = 'up';
    }
  }
  floorDown() {
    if(this.floor > 0 && this.floor <= 10){
      this.floor --;
      this.direction = 'down';
    }
  }
  call() { }
  log() {
    console.log(`Direction ${this.direction} | Floor ${this.floor}`);
  }
}

module.exports = Elevator;
