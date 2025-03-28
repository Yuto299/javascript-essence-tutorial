function a() {
  console.log('hello');
}

a.prop = 0;
a.method = function () {
  console.log('method');
};

a(); //関数の実行が行われる
a.method();
console.log(a.prop);
