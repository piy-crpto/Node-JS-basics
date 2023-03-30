const path = require("path");
  console.log(path.dirname("C:/Users/piyus/Desktop/NODE JS/pathModule/path.js"));
//  console.log(path.extname("C:/Users/piyus/Desktop/NODE JS/pathModule/path.js"));
//  console.log(path.basename("C:/Users/piyus/Desktop/NODE JS/pathModule/path.js"));


 const mypath = path.parse("C:/Users/piyus/Desktop/NODE JS/pathModule/path.js");

 console.log(mypath.name);

