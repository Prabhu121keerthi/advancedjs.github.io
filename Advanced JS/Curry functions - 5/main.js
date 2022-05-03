/*
const buildSandwhich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    }
  }
}

const mySandwitch = buildSandwhich("Bacon")("Lettuce")("Tomato");
console.log(mySandwitch);

const buildSammy = ingred1 => ingred2 => ingred3 =>
                    `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy("turkey")("cheese")("bread");
console.log(mySammy);

*/

const multiply = (x,y) => x * y;
const curiedMultiply = x => y => x * y;

console.log(multiply(2, 3));
console.log(curiedMultiply(2)(3));

const timesTen = curiedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

const updateElemText = id => content => document.querySelector(`#${id}`);
textContent = content;
const updateHeaderText = updateElemText('header');
updateHeaderText('Hello Dave');

//function composition
const addCustomer = fn => (...args) => {
  console.log("savng customer info");
  return fn(...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing order #${args[0]}`);
  return fn(...args);
}

let complteteOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed`);
}

complteteOrder = (processOrder(complteteOrder));
complteteOrder = (addCustomer(complteteOrder));
complteteOrder("1000");
