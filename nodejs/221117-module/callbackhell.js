const { resolve } = require("path");

// function login(id, pw, cb){
//   setTimeout(() => {
//     console.log("사용자");
//     cb(id)
//   },3000);
// }
// function getVideo(id, cb){
//   setTimeout(function(){
//     console.log(id + '의 비디오 리스트')
//     cb(['아바타', '라라랜드'])
//   },2000)
// }
// function getDetail(video, cb){
//   setTimeout(function(){
//     cb("비디오 제목 : " + video)
//   },1000)
// }

// login('kim', '1234', function(user){
//   getVideo(user, function(videos){
//     getDetail(videos[0], function(msg){
//       console.log(msg)
//     })
//   })
// })
//콜백함수에 파라미터가 있어야 하는 이유 : 그 값을 이용을 해야하니까
//getDetail을 받아야하는 function으로 받으니까 헤깔린다. ->  그렇다고 getDetail로
//받으면 다음 콜백을 쓸 수가 없다.
function login(id, pw){
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("사용자");
      res(id)
    },3000);
  })
}


login('kim', '1234').then(function(id){
  return id
}).then(function(id){
  setTimeout(() => {
    console.log(id + '의 비디오 리스트')
  },2000);
  return ['아바타', '라라랜드'];
}).then(function(video){
  setTimeout(() => {
    console.log("비디오 제목 : " + video[0])
  },1000);
})
