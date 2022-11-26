const url = require("url");

var string = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac')

console.dir(string.searchParams)
// console.log(string.searchParams.keys())
// console.log(string.searchParams.entries())
// console.log(string.searchParams.delete('sm'))
// console.log(string.searchParams.keys())