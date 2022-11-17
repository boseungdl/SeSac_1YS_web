let list = ['a', 'b'];

[x,y] = list
console.log(x)
console.log(y)

let obj = {
  a : 'one',
  b : 'two'
}

let {a : key1, b, c='ccc'} = obj;
console.log(key1)
console.log(b)
console.log(c)

