function hello(name) {
  if (!name) {
    name = 'Ken';
  }
  // name = name || 'Ken';
  console.log('Hello, ' + name);
}

hello();

let name = 'Bob';
