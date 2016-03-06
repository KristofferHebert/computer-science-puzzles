function multiplyMatrix(a, b) {

    var result = []
    var bLength = b.length
    var aLength = a[0].length

    for(var j = 0; j < bLength; j++){

        result[j] = []

        for(var k = 0; k < aLength; k++){

            var sum = 0
            for(var i = 0; i < aLength; i++){
                sum += a[i][k] * b[j][i]
            }
            result[j].push(sum)
        }

    }
    return result
}
