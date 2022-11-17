// const func1 = setTimeout(function(){console.log("1.5후 실행")}, 1500)
// const func2 = setInterval(function(){console.log("1초마다 반복")}, 1000)
// const func3 = setTimeout(function(){console.log("func3 실행")}, 3000)

// setTimeout(() => {
//   clearTimeout(func3)
//   clearInterval(func2)
// }, 2500)

// const func4 = setImmediate(() => {
//   console.log("func4 즉시 실행")
// })
// const func5 = setImmediate(() => {
//   console.log("func5 즉시 실행")
// })
// clearImmediate(func5) //전체를 읽고 취소를 한다.


setTimeout(() => {
  console.log(3)
},0)
setTimeout(() => {
  console.log(4)
},0)
function a(){
  console.log(1)
}a()
function b(){
  console.log(2)
}b()


/*
func4 즉시 실행
1초마다 반복
1.5후 실행
1초마다 반복
*/