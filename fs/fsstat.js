const fs= require('fs')

fs.stat('../files/newtext.txt','utf-8', (err, stat)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(stat)
    console.log("is the file",stat.isFile())
    console.log("is the directory",stat.isDirectory())
    }
})
