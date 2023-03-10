const fs = require('fs')

fs.unlink('../files/tet.txt', (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('deleted')
    }
})