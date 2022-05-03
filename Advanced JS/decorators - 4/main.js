/*
let sum = (...args) => {
  return [...args].reduce((acc,num) => acc+num);
}

const callCounter = (fn) => {
  let count = 0;

  return (...args) => {
    console.log(`sum has been called ${count += 1} times`);
    return fn(...args);
  }
}

sum = callCounter(sum);

console.log(sum(2,3,5));
console.log(sum(14,5));

*/

//check for valid data and no of params
let rectangleArea = (length, width) => {
  return length*width;
}

const countParams = (fn) => {
  return (...params) => {

    if(params.length !== fn.length) {
      throw new Error(`Incorrect no of parameter ${fn.name}`);

    }
    return fn(...params); 
  }
}

const requireIntegers = (fn) => {
  return(...params) => {
    params.forEach(param => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`params for ${fn.name} must be integers`);
      }
    });
    return fn(...params);
  }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20, 30));
console.log(rectangleArea(20, 30, 40));

// decorating async api function call

let requestData = async(url) => {
  try {

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(err) {

    console.err(err);
  }
}