const person = {
  name: 'Tom',
  hello: function () {
    console.log('hello ' + this.name); //thisはpersonを指す
  },
};

person.hello();
