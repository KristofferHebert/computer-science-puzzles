function fizzBuzz(number){

    // Validate input, return -1
    if(isNaN(number))
        return -1

    var result = ""
    var index = 0

    while(index++ < number){
        if(index % 3 === 0){
            result += "Fizz"
        else if(index % 5 === 0)
            result += "Buzz"
        else if(index % 5 === 0 && index % 3 === 0)
            result += "FizzBuzz"
        else
            result += index
    }

    return result

}
