const fs = require('fs')

const string1="hello this from string 1 append"

fs.appendFile('../files/text.txt', string1,(err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data,"data appended sucessfully")
    }
})