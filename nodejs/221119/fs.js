
// fs2.readFile("./test.txt", function(err, data){ //readFile안의 콜백함수를 받는 매개변수가 자리를 잡고 있다.
//   if(err) console.log(err);

//   console.log("data : ", data.toString() );
// });

const fs = require('fs');
const fs2 = require('fs').promises;
// fs2.writeFile("./write.txt", "console.log(2)")
//   .then(function(result){
//     return fs2.readFile("./write.txt");
//   })
//   .then(function(data){
//     console.log(data.toString())
//   })

  
fs.readFile("./test.txt", function(err, data){ //readFile안의 콜백함수를 받는 매개변수가 자리를 잡고 있다.
  console.log(2);
});


let pro = new Promise((res, rej) => {})
console.log(typeof pro)


// const fs = require("fs")

// fs.writeFile('./write2.txt', 'codingon', function(err, data){
//   if(err) throw err;
//   console.log("writeFile success");
//   fs.readFile("./write2.txt", function(err, data){
//     if (err) throw err;
//     console.log("write2File data : ", data.toString())
//   })
// })
