const Elevator = require('./elevator.js');

let elevator = new Elevator();
elevator.log();
//elevator.update();
//elevator.start();
//elevator.stop();
elevator.floorUp();
elevator.log();
elevator.floorDown();
elevator.log();
