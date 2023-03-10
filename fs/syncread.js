const fs = require('fs')

console.log("1st line")
try{
    const data= fs.readFileSync('../files/newtext.txt','utf-8')
    console.log(data)
}
catch(error){
console.log(error)
}

console.log("2nd line")