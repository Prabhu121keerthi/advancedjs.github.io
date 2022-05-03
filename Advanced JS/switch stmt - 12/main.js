const extension = '.css';

const extObj = {
  '.css': 'text/css',
  '.js': 'text/javascript'
}

console.log(extObj[extension]);

const myMap = new Map();
myMap.set('.css','text/css');
myMap.set('.js','text/javascript');

console.log(myMap.get(extension));