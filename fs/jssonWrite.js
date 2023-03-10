const fs = require('fs')

fs.readFile("../files/user.json","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        const user= JSON.parse(data)
        user[1].designation= "Senior Developer"

        fs.writeFile('../files/user.json',JSON.stringify(user),(err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("sucessful")
            }
        })
    }
})