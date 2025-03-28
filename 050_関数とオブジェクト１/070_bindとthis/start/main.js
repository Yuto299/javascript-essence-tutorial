window.name = 'John';

const person = {
  name: 'Tom',
  hello: function () {
    console.log('Hello ' + this.name);
  },
};
person.hello();

const helloTom = person.hello.bind(person);

function fn(ref) {
  ref();
}

fn(helloTom);

function a() {
  console.log('Hello ' + this.name);
}

const b = a.bind({ name: 'Tim' });

b();

//bindメソッドは、関数に対して呼び出し元のオブジェクトを指定することができる
//bindメソッドで呼び出し元のオブジェクトを指定すると、そのオブジェクトがthisとして設定される
//bindメソッドで呼び出し元のオブジェクトを指定した関数を他の関数に渡しても、thisは設定されない
