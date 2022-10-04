function reject(array,cb){
    
}

reject([1,2,3,4],function(val){
    return val>2
})

reject([1,2,3,4],function(val){
    return val%2===0
})