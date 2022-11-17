const url = require("url");
console.log(url);
console.log(url.parse);
console.log(url.URL);
var obj = url.parse("https://nodejs.org/dist/latest-v18.x/docs/api/path.html");
console.log(obj);
console.log(url.format(obj));

var string = new url.URL("https://newsstand.naver.com/?list=&pcode=308"); //url모듈 안에 URL이라는 클래스가 있다. 
string.searchParams.append("age", "20")
console.dir(string.searchParams)

console.log(string.searchParams.getAll("age"))
console.log(string.searchParams.has("abc"))
