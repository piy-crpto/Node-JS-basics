// Event Module
// Node.js has a built-in module, called "Events"
// where you can create-,fire-, and listen for- ypur own evets

//Example 1- Registering for the event to be fired only one time using once
//Example 2- Create an event emitter instance and register a couple of callback
//Example 3- Registering for the event with callback parameter


//emitter object have two main features
//1.- Emitting name events
//2.- Registering and understanding listener functions



// create a class
const EventEmitter = require("events");

 const events = new EventEmitter();


// events.on("sayMyName",()=>
// {
//     console.log("piyush");
// })

// events.on("sayMyName",()=>
// {
//     console.log("suraj");
// })

// events.on("sayMyName",()=>
// {
//     console.log("p");
// })


//  events.emit("sayMyName");






events.on("checkPage",(sc,msg)=>
{
     console.log(`status code is ${sc} ans msg is ${msg}`);
});

events.emit("checkPage",200,"ok");