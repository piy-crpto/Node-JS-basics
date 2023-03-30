const fsa = require("fs");
// fs.writeFile("read.txt","Today is awesomr", (err) =>{
//         console.log("created");
// });


fsa.writeFileSync("read.txt","This is you");
 
 

 const f_data = fsa.readFileSync("read.txt");
 console.log(f_data);