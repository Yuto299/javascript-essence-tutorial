function a(name) {
  console.log('hello ' + name);
}

const tim = { name: 'Tim' };

const b = a.bind(tim);
b();
//めんどくさい

a.apply(tim, ['Tim']); //配列
a.call(tim, 'Tim'); //文字列
//簡単、関数の実行まで行われる

const array = [1, 2, 3, 4, 5];

// const result = Math.max.apply(null, array);
const result = Math.max(...array);
console.log(result);
