function hello(name) {
  console.log('Hello, world!' + name);
}

function bye() {
  console.log('Bye, world!');
}

function fn(cb) {
  cb('Tom'); // hello関数が実行される
}

fn(hello);
fn(bye);
fn(function (name) {
  console.log('hello' + name);
});

setTimeout(hello, 2000, 'Tom');
