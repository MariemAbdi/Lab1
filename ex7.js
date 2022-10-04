/* CALLBACK */
/*function inOrder(one,two){
    one
    two}*/

/* PROMISES */
function inOrder(one,two){
    one
    two
}
/* ASYNC/AWAIT */
/*function inOrder(one,two){
    one
    two
}*/

var logOne = setTimeout(function(){
    console.log("one!")
},Math.random()*1000)

var logTwo = setTimeout(function(){
    console.log("two!")
},Math.random()*1000)

inOrder(logOne,logTwo)

