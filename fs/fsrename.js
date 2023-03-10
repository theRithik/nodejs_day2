const fs = require('fs')

fs.rename('../files/text.txt','../files/newtext.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
        console.log('file changed')
    }
})