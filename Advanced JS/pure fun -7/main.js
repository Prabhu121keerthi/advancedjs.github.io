//same i/p gives same o/p
const add = (x,y) => x + y;
console.log(add(2,3));

const fullName = (first,last) => `$(first) $(last)`;
console.log("Dave","Gay");

//replace the fun with o/p called referential transparency


//impure
let x = 1;
const increment = () => x+=1;
console.log(increment());
console.log(x);

const pureIncrement = (num) => num+=1;
console.log(pureIncrement(x));
console.log(x);