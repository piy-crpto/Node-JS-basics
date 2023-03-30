//  const fs = require("fs");
const bioData =
{
    name:'Piyush',
    adress:'Varanasi',
    stream:'B.Tech'
}

//convert object to json
// dusre file me add krna
//read file
// again convert into object
//consoe log
const fs = require("fs");
const jsonData  = JSON.stringify(bioData);
// console.log("done");
fs.writeFile("json1.json", jsonData, (err) =>{
    console.log("done");
});


fs.readFile("json1.json","utf-8",(err,data)=>
{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});




