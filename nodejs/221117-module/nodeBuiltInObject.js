/*
  global 내장 객체

  console객체는 디버깅할때??
*/ 

console.log(global)
console.log(global.console)

/* console 내장객체 */

let obj = {
  out: {
    in: {
      key : 'value'
    }
  },
  ss: {
    in: {
      key : 'value'
    }
  },
}
console.log(obj);
console.log(obj['out']); //문자열로 해라 실수조심
console.time('시간');
console.error('err');
console.timeEnd('시간');
console.table([{name:'abc'}, {name: 'def',dd : 's'}]);
console.dir(obj, {colors: true, depth:0});
console.dir(obj, {colors: true, depth:2});
console.trace('error');