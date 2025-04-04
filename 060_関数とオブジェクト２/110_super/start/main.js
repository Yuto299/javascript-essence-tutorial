class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age); //Personを呼び出す
    this.gender = gender; //superの後に書く
  }

  hello() {
    super.hello();
    console.log('Konnichiwa ' + this.name);
  }

  bye() {
    console.log('Sayonara ' + this.name);
  }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.bye();

const american = {
  hello() {
    console.log('hello ' + this.name);
  },
};

const bob = {
  name: 'Bob',
  hello() {
    super.hello();
  },
};

Object.setPrototypeOf(bob, american);
bob.hello();

//superはclassの中でしか使えない
