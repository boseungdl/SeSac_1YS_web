console.log("__filename : " + __filename);
console.log("__dirname : " + __dirname);

/**
 * process 객체 = 현재 실행 중인 노드 프로세스 정보
 */
console.log("process.version : ", process.version);
console.log("process.arch : ", process.arch);
console.log("process.platform : ", process.platform);
console.log("process.cpuUsage : ", process.cpuUsage());

/**
 * os 모듈 - 운영체제 
 */
const os = require("os"); //내장객체가 아닌 내장모듈이기때문에 require로 불러와야한다.
console.log("os.type : ", os.type() );
console.log("os.cpus : ", os.cpus() );
console.log("os.homedir : ", os.homedir() );
console.log("os.freemem : ", os.freemem() );

const path = require("path");
const file = __filename;
console.log("path.extname : ", path.extname(file)); //확장자만 가져오고
console.log("path.parse : ", path.parse(file)); //모든 것을 객체로 분리해 보여준다.