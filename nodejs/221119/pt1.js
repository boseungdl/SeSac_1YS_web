const fs = require("fs").promises;

fs.writeFile("./sesac.txt", "반갑습니다") 
.then(() => {
  return fs.copyFile("./sesac.txt", "./sasac2.txt")
})
.then(() => {
  fs.rename("./new.txt", "./new2.txt")
  console.log("new.txt")
})



