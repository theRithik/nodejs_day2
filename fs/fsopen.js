const fs = require('fs')
const allocatedBuffer= Buffer.alloc(1024)

fs.open('../files/text.txt', 'r+', (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
    console.log(data,'file opened successfull')
    
    fs.read(data, allocatedBuffer,0,allocatedBuffer.length,0,(reer,data1)=>{
if(reer){
    console.log(reer)
}
else{
    console.log(data1, "read from data2")
    if(data1>0){
        console.log(allocatedBuffer.slice(0,data1).toString());
    }
}
    })
    }
})