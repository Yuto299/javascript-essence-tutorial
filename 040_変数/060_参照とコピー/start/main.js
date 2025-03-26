let a = 'hello';
let b = a; // aの値をbにコピー
b = 'bye';
console.log(a, b); // hello

let c = {
  prop: 'hello',
};
let d = c;
d = {};
console.log(c, d);
