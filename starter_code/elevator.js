
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.clear = '';
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.clear = setInterval(() => {
      this.update()
    },1000);
  }
  stop() {
    clearInterval(this.clear);
  }
  update() {
    this.log();
  }
  _passengersEnter() {
    for(let person in this.waitingList){
        if(this.waitingList[person].originFloor === this.floor){
          this.passengers.push(this.waitingList[person]);
          this.requests.push(this.waitingList[person].destinationFloor);
          console.log(`${this.waitingList[person].name} has enter the elevator`);
          this.waitingList.splice(person,1);
        }
    }

  }
  _passengersLeave() {
    for(let person in this.passengers){
      console.log(this.passengers[person]);
        if(this.passengers[person].destinationFloor === this.floor){
          console.log(`${this.passengers[person].name} has left the elevator`);
          this.passengers.splice(this.passengers[person]);
        }
    }
   }
  floorUp() {
    this._passengersEnter();
    if(this.floor <= this.MAXFLOOR){
      this.floor ++;
      this.direction = 'up';
    }
    this.update();
    this._passengersLeave();
  }
  floorDown() {
    this._passengersEnter();
    if(this.floor >= 0){
      this.floor --;
      this.direction = 'down';
    }
    this.update();
    this._passengersLeave();
  }
  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }
  log() {
    console.log(`Direction ${this.direction} | Floor ${this.floor}`);
  }
}

module.exports = Elevator;
