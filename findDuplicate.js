function findDuplicates(array){
    var result = []

    array.forEach(function(val, index){
        if(array.indexOf(val) !== index && array.indexOf(val) !== -1) {
            result.push(val)
        }
    })

    return (result.length !== 0) ? result : -1
}
