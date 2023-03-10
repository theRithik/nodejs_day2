const fs = require('fs')

const yarg = require('yargs').argv

fs.readFile('../files/text.txt','utf8',(err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data,'able to read this data successfully')
        const fileArry= data.split('\n')
        if(fileArry.indexOf(yarg.filename===-1)){
fs.writeFile(''+yarg.filename+'.txt',"test data",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        fs.appendFileSync("text.txt",yarg.filename+'\n');
        console.log("filename appended successfully")
    }
})
        }
        else{
            console.log("file name is already present")
        }
    }
})