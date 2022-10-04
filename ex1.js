function myFunction(msg,type){

    switch (type)
    {
        case 1:  return console.log(msg)
        case 2:  return alert(msg)
        case 3:  return prompt(msg)
        case 4:  return confirm(msg)
        case 5:  return console.log(msg + " from a callback function!")
    }
    
}

myFunction("Un message",5)

