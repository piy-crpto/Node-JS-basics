const http = require("http");
// const req = require("url");
const fs = require("fs");

const jsnData =  fs.readFileAsync(`${__dirname}/userApi/api.json`)
const objData  = jsnData.parse(jsnData);
     
const server = http.createServer ((req,res) =>
{ 
    if(req.url=="/")
   res.end("<h1>Hello from the other sides </h1>");
   

   else if(req.url=="/about"){
      res.end("<h1>Hello from the about sides </h1>");
   }

   else if(req.url=="/userApi"){
      // fs.readFile(`${__dirname}/userApi/api.json`,'utf-8',(err,data)=>
      // {
      //    console.log(data);
      //    res.end(data);
      // })

      res.writeHead(200, {"content-type":"application/json"})
       res.end("<h1> Hello from the userApi sides </h1>");
   }

   else{
      res.writeHead(404,{"content-type":"text/html"});
      res.end("<h1>404 page not found </h1>");
   }
});


server.listen(8000,"127.0.0.1", ()=>
{
     console.log("Listening to the port 8000")

})



