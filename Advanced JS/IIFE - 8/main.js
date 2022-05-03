//Anonymous arrow fun inside
(() => {


})();

//fun keyword
(function () {


})();

//func name 
(function myNum() {
  num++;
  console.log(num);
  return num!==5 ? myNum(num):console.log("finished");
})(num=0);

//doesnt pollute global objnamespace
const x ="whatever";

const helloworld = () => console.log("hello world");

(() => {

  const x ="life whatever";
  const helloworld = () => "hello world";
  console.log(x);
  console.log(helloworld());
  
})

console.log(x);
console.log(helloworld());

//module pattern
const score = (() => {
  let count = 0;

  return {
    current: () => {return count},
    increment: () => {count++},
    reset: () => {count = 0}
  }
})();
score.increment();
console.log(score.current());
score.increment();
console.log(score.current());
score.reset();
console.log(score.current());

//injecting namespace object
((namespace) => {
  namespace.count = 0;
  namespace.current = function () { return `App count is $(this.count)`}
  namespace.increment = function () {this.count++};
  namespace.reset = function () {this.count = 0};
})(window.App = window.App || {});

App.increment();
console.log(App.current());