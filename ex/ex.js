const { resolve } = require('path');

const fs = require('fs').promises;


// fs.readFile('./writeme.js')
//   .then(() => {
//     return console.log(1)
//   })

// fs.readFile('./writeme.js')
//   .then(() => {
//     return console.log(2)
//   })

// fs.readFile('./writeme.js')
//   .then(() => {
//     return console.log(3)
//   })
new Promise((resolve,r) => {resolve(1)})
  .then((data)=> {console.log(data); return 1}).then((d) => console.log(d+1))
new Promise((resolve,r) => {resolve(2)})
  .then((data)=> {
    for(let i = 0; i<10000000000; i++){
      var a = i
    }
    console.log(122)
  })
  //이건 왜 순서가 보장되지???...

//완료가 되지않았는데 다음게 실행되는게 비동기 - 그럼 writeFile, setTimeout다 비동기이다. 백그라운드로 가지 않았다고 동기 인게 아니다.?
//writeFile등(프로미스)이 런타임에서 백그라운드로가고 런타임에서 then을 만나면 then이 백그라운드로가서 결과값(resolve나 응답데이터axios)을 받으면 태스크 큐로간다.
//비동기콜백은 비동기 함수가 실행이되고 백그라운드로 갖고 있던 콜백함수를 넣어주는거다.

