const num = require('./module01');
const a = num.a;
const b = num.b;

function add(){
  return a + b;
}

module.exports = add;