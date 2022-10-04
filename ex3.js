function map(array,cb){
    array.map((num,index)=>
    array[index]=cb(num)
    )
    console.log(array)
}

map([1,2,3,4],function(val){
    return val*2
})