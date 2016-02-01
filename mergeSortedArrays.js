function mergeSortedArrays(firstArray, secondArray) {
    var result = []

    firstArray.forEach(function(val, index){
        if(val > secondArray[index]) {
            result.push(secondArray[index])
            result.push(val)
        } else {
            result.push(val)
            result.push(secondArray[index])
        }
    })

    return results

}
