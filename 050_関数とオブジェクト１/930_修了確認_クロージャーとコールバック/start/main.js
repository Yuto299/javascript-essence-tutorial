/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 *
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 *
 */
function hello(name) {
  return function () {
    console.log('hello ' + name);
  };
}

/**
 * 実行文は以下の通りです。
 */
setTimeout(hello('Tom'), 1000); //これ実行するならここまで関数を返してこないといけない。だからreturnが必要
// hello('Tom')(); // これだと即時実行されてしまうので、setTimeoutの中に入れられない

// function hello(name) {
//   console.log('hello ' + name);
// }

// setTimeout(() => hello('Tom'), 1000);
