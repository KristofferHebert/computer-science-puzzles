function highestProduct(array){
    if(array.length < 3) throw new Error('Please provide 3 numbers')

    if(array.length === 3)
        return array[0] * array[1] * array[2]

    var result = array.slice(0, 3)

    array.forEach(function(val){
        if(result[0] < val) {
            result.unshift(val)
            result.pop()
        }
    })

    return result[0] * result[1] * result[2]
}
