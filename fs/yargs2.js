const fs= require('fs')
const yarg = require('yargs').argv

fs.readFile('../files/text.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
        const fileArrry= data.split('\n')
        if(fileArrry.indexOf(yarg.filename===-1)){
fs.writeFile(''+yarn.filename+".txt", "test data",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        fs.appendFileSync("text.txt"+yarg.filename+'\n')
        console.log("file name append successfully")
    }
})

        }else{
            console.log("file name is already present")
        }
    }
})