function printEquality(a, b) {
  console.log(a === b); //厳格な等価性
  console.log(a == b); //抽象的な等価性
}

let a = '1';
let b = 1;

let c = true;

// printEquality(b, c);

let e = 0;
let f = '';

printEquality(e, f);
