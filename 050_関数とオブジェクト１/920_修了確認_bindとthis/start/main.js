const person = {
  name: 'Tom',
  bye() {
    console.log('Bye ' + this.name);
  },
  hello: function (greeting) {
    console.log(greeting + ' ' + this.name);
    return greeting + ' ' + this.name;
  },
  hello1: function () {
    console.log('hello Tom');
  },
  hello1s() {
    // const self = this;
    // setTimeout(() => {
    //   self.hello1();
    // }, 1000);
    setTimeout(() => this.hello1(), 1000);
  }, //アロー関数はthisを持たない
  hello2: () => {
    alert('hello Tom');
  },

  /**
   * 問題４：
   * 1秒後に"hello Tom"
   * と出力されるような、メソッドを
   * personオブジェクトに追加してみてください。
   *
   * 以下のように使用するものとします。
   * `person.hello1s()`
   * -> 1秒後に"hello Tom"と出力
   *
   * 3通りの方法で実装してみてください。
   * １．bind
   * ２．アロー関数
   * ３．thisを一旦変数に代入
   */
};
// person.hello1s();

/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
// person.hello1s();

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
// person.hello2();

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
// setTimeout(person.bye(), 1000);
