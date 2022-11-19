function func1(callback){
  console.log('func1')
  console.log('func1') //여기까지가 함수1
  callback('이름'); //그다음 콜백 -> 순서를 강제했다. 그냥 함수없이 일자로 쭉 쓴거 동기라면
}
function func2(name){
  console.log('func2')
  console.log('name', name)
}

func1(func2)

