/*function each(array,fct){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        fct(element)
    }
}*/

function each(array,cb){
    array.forEach(element => {
        cb(element)
    });
}

each([1,2,3,4],function(val){
    console.log(val)
})

each([1,2,3,4],function(val){
    console.log(val*2)
})