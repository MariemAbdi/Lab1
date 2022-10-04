/* CALLBACK */
/*function inOrder(one,two){
    one
    two}*/

/* PROMISES */
/*function inOrder(one,two){
    return new Promise((resolve,reject)=>{
        resolve(one)
        resolve(two)
    })
}
*/


/* ASYNC/AWAIT */
async function inOrder(one,two){
    one 
    await two
    
}

var logTwo = setTimeout(function(){
    console.log("two!")
},Math.random()*1000)


var logOne = setTimeout(function(){
    console.log("one!")
},Math.random()*1000)


inOrder(logOne,logTwo)

