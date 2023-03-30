const fs = require("fs");
// fs.mkdir("piyush",(err)=>
// {
//    console.log("folder created");
// });
// fs.writeFile("piyush/bio.txt","Today is awesome io fille", (err) =>{
//         console.log(" bio created");
// });


// fs.appendFile("piyush/bio.txt"," 2Today is awesome io fille", (err) =>{
//         console.log("appended");
// });
// fs.readFile("piyush/bio.txt","UTF-8", (err,data) =>{
//     console.log(data);
//     console.log(err);
// });

// "UTF-8"  file encoding


// fs.rename("piyush/bio.txt","piyush/myBio.txt", (err) =>{
//     console.log("rename");
    
// });


// fs.unlink("piyush/myBio.txt", (err) =>{
//     console.log("deleted");
    
// });

fs.rmdir("piyush", (err) =>{
    console.log(" main folder deleted");
    
});