let obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: function () {
    //無名関数
    console.log('value3');
  },
  prop4: {
    prop5: 'value5',
  },
};

console.log(obj.prop1);
obj.prop3();
console.log(obj.prop4.prop5);
