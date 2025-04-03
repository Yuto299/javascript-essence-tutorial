function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log('hello ' + this.name);
};

function Japanese(name, age) {
  Person.call(this, name, age);
}

Japanese.prototype = Object.create(Person.prototype);
//プロトタイプ継承

Japanese.prototype.hello = function () {
  console.log('konnichiwa ' + this.name);
};

const taro = new Japanese('Taro', 22);
console.log(taro);

taro.hello();
