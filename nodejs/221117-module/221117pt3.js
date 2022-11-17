function call(name,cb) {
  setTimeout(() => {
    console.log("사용자는 " + name);
    cb('back', hell)
  },2000)
  return "call";
}
function back(b, cb) {
  setTimeout(() => {
    console.log( "두번째는 " + b );
    cb('hell')
  },1000)
  return "back";
}
function hell(c) {
  setTimeout(() => {
    console.log( "세번째는 " + c);
  },1000)
  return "hell";
}

let a = call('kim',back);
