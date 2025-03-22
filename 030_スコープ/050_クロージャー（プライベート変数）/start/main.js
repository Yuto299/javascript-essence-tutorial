function incrementFactory() {
  let num = 0;
  function increment() {
    num = num + 1;
    console.log(num);
  }
  return increment;
}

const increment = incrementFactory();
increment(); // 1
increment(); // 2
increment(); // 3
