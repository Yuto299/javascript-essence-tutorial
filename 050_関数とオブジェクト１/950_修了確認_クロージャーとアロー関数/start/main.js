/**
 * 以下のコードはクロージャーのレクチャーで作成したコードです。
 * これをアロー関数を用いてなるべく短くなるように記載してみてください。
 *
 * 問題１：
 * addNumberFactoryを短く書き直してみましょう。
 */
function addNumberFactory(num) {
  return (value) => num + value;
}

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

/**
 * 問題２：
 * incrementFactoryを短く書き直してみましょう。
 */
function incrementFactory() {
  let num = 0;
  return () => {
    //(num)にするとnumが初期化されてしまう、numはあくまでも関数内で定義されている
    num += 1;
    console.log(num);
  };
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();
