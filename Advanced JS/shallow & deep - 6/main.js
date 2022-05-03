// value vs reference 
let x=2;
let y=x;
y+=1;

console.log(x);
console.log(y);

//strctural type uses reference
let xArr = [1,2,3];
let yArr= xArr;
yArr.push(4);
console.log(xArr);
console.log(yArr);

//mutable vs immutable
let myName = "dave";
myName[0] = "a";
console.log(myName);

yArr[0] = 8;
console.log(yArr);
console.log(xArr);

//impure function mutates the data
const addScore = (arr,score) => {
  arr.push(score);
  return arr;
}

const data = [11,2,33];
console.log(addScore(data,55));

//shallow copy with spread operator
const zArr = [...yArr, 100];
console.log(zArr);
console.log(yArr);

//with object assign
const tArr = Object.assign([].zArr);
console.log(zArr);
console.log(tArr);
