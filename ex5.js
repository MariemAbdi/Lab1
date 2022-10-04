function countdown(num){
    if(num===0)
    {
        console.log("DONE!")
        return
    }
    num--
    setTimeout(countdown(num),1000)
    console.log(num)
}

setTimeout(countdown(5),1000)