const fs  = require('fs');


//Reading file
fs.readFile('./docs/blog1.txt',(err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
});

//Writing File


//Directoreis


//Deleting files