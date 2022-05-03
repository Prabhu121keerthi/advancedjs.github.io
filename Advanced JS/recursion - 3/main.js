/*
const countToTen = (num = 1) => {

  while(num<=10)
  {
    console.log(num);
    num++;
  }
}

countToTen();

*/

//recursion
const countToTen = (num = 1) => {

    if(num > 10) return;
    console.log(num);
    num++;
  countToTen(num);
}

//countToTen();


//fibnocci without recursion

const fib = (num, arr = [0, 1]) => {

  while(num>2) {
    const [nextToLast, last] = arr.slice(-2);
    arr.push(nextToLast + last);
    num -= 1;
  }
  return arr;
}

//console.log(fib(12));

//with recursion
const fibn = (num, arr = [0, 1]) => {

    if(num < 2) return arr
    const [nextToLast, last] = arr.slice(-2);
    return fibn(num-1, [...arr, nextToLast + last]);
}

console.log(fibn(12));
