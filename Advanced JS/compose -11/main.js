
const add = (x) => x+2;
const sub = (x) => x-1;
const mult = (x) => x * 5;

const result = mult(sub(add(2)));
console.log(result);

//compose fun right to left
const compose =(...fns) => val => fns.reduceRight((prev,fn) => fn(prev), val);

const compResult = compose(mult,sub,add)(4);
console.log(compResult);

// left to right we use pipe
const pipe =(...fns) => val => fns.reduce((prev,fn) => fn(prev), val);

const pipeResult = compose(mult,sub,add)(4);
console.log(pipeResult);

const lorem = "In case Pragati and Unnati are real sisters & no consideration is paid: As per Section 7(1)(c) read with Schedule I, import of services by person from a related person or from any of his other establishments outside India, in the course or furtherance of business will be treated as supply. ";

const splitOnSpace = (string) => string.split('');
const count = (array)  => array.length;

const wordCount = pipe (
  splitOnSpace,
  count
);

console.log(wordCount(lorem));