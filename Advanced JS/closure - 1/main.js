/*
let x=1;
const parentFunction = () => {

  let myValue = 2;
  console.log(x);
  console.log(myValue);

  const childFunction = () => {

    console.log(x += 5);
    console.log(myValue += 1);
  }

  return childFunction();
}

const result = parentFunction();
console.log(result);

result();
console.log(x);
console.log(myValue);

*/

//Immediately invoked function expression
/*
const privateCounter = (() => {

  let count = 0;
  console.log(`initial value ${count}`);

  return () => {count+=1 ; console.log(count)}
})();

privateCounter();
privateCounter();
privateCounter();

*/

const credits = ((num) => {
  let credits = num;
  console.log(`initial credit ${credits}`);
  return () => {

    credits-=1;
    if(credits > 0)
      console.log(` ${credits}  credits remaining`);
    if(credits <= 0)
      console.log(` ${credits}`);

  }
})(3);

credits();



