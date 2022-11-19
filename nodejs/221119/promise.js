/**
 new promise(function(resolve, reject){}) 
 */

// function func1(){
//   return new Promise(function(resolve,reject){
//     resolve('성공')
//   })
//  }
// function func1(){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve('성공')
//     },1000) 
//   })
//  }

//  var a = func1();
//  console.log(a)
//  func1().then(function(result){
//   console.log('result', result)
//  })

function func3(flag){
  return new Promise(function(resolve, reject){
    if(flag){
      resolve("flag는 true")
    } else {
      reject("flag는 false")
    }
  })
}
func3(false).then(
  function(msg){
    console.log("msg1 : ", msg)
  }
).catch( function(msg){
  console.log("msg2 : ", msg)
})
