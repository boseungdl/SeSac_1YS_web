const os = require('os');
const path = require("path");

console.log("사용 가능한 메모리 : ", os.freemem())
console.log("전체 메모리 : ", os.totalmem())
console.log("홈 디렉토리 경로: ", os.homedir())

const file = __filename
console.log("경로 구분자 : ", path.sep)
console.log("현재 파일의 확장자 : ", path.extname(file))
console.log("현재 파일의 경로 분리 : ", path.parse(file))
