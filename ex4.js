function reject(array,cb){
    var newAR=[]
    var ArIndex=0
    array.map((num)=>
    {if(!cb(num))
        {newAR[ArIndex]=num
        ArIndex++}
    }
    )
    console.log(newAR)
}

reject([1,2,3,4],function(val){
    return val>2
})

reject([2,3,4,5],function(val){
    return val%2===0
})

