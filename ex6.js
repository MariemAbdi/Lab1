var compt=1
function randomGame(number){
    console.log("The Number is: ",number)
    if(number>0.75)
    {
        console.log(" After: ",compt," times")
        return
    }
    compt++
    setTimeout(randomGame(Math.random()),1000)
}

setTimeout(randomGame(Math.random()),1000)
