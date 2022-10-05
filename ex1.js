function myFunction(msg,cb,complement=""){
    cb(msg+complement)    
}

myFunction("Un message",console.log)
myFunction("Un message",alert)
myFunction("Un message",prompt)
myFunction("Un message",confirm)
myFunction("Un message",console.log," from a callback function")

