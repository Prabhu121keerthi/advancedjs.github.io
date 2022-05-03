/*
const person = {
  alive : true
}

musician = {
  plays: true
}

Object.setPrototypeOf(musician,person);

//console.log(musician.plays);
//console.log(musician.alive);
//console.log(person.alive);

const guitarist = {
  strings: 6,
  __proto__: musician
}

console.log(guitarist.plays);
console.log(guitarist.alive);
console.log(guitarist.strings);
console.log(guitarist);

*/

/*
const car = {
  doors : 2,
  seats : 'vinyl',
  get seatMaterial()
  {
    this.seats = this.seats;
  },
  set seatMaterial(material)
  {
    this.seats = material;
  }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar,car);
luxuryCar.seatMaterial = 'leather';
console.log(luxuryCar);

console.log(Object.keys(luxuryCar));

Object.keys(luxuryCar).forEach(key =>
  {
    console.log(key);
  })

for(let key in luxuryCar)
{
  console.log(key);
}

*/

//object constructors
/*
function Animal(species) {
  this.species = species;
  this.eats = true;
};

Animal.prototype.walks = function() {
  return `a ${this.species} is walking`;
};

const Bear = new Animal("bear");

console.log(Bear.species);
console.log(Bear.walks());
console.log(Bear.__proto__ == Animal.prototype);

*/

//Inheritance

class Vehicle
{
  constructor() {
    this.wheels = 4,
    this.motorized = true
  }

  ready()
  {
    return "ready to go";
  }
}

class Motorcycle extends Vehicle {

  constructor() {
    super();
    this.wheels = 2
  }

  wheelie() {
    return "on the wheel now";
  }
  
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.ready());
console.log(myBike.wheelie());

const myTruck = new Vehicle();
console.log(myTruck);