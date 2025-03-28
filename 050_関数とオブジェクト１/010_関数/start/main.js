function fn(a, b = 1) {
  console.log(arguments);
  console.log(a, b);
  return a;
}

fn(1); //nullにしたらnullが採用される
