function func1(value, call){
  console.log(value)
  call();
}
func1(1, function(){
  console.log('1')
})
function func2(){
  console.log(2)
}
func1(func2);




console.log('start');
/*function login(id, cb){
  setTimeout(() => {
    console.log('x');
    console.log(id + '님 환영합니다.')
  },2000)
}*/
function login(id, cb){
  setTimeout(() => {
    console.log('x');
    cb(id)
  },2000)
}

login('kim', function(id){
  console.log(id + '님 환영합니다.')
})
console.log("finish")