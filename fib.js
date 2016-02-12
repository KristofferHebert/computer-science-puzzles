function fib (n){

    // Check if n is a number
    if(!isNaN(n))
        return new Error('Input must be a integer')

    // Check for negative integers
    if(n < 0)
        return new Error('Input must be greater than 0')

    // If 0 or 1 return n
    if([0,1].indexOf(n))
        return n

    var prev = 0
    var prevprev = 1
    var index = -1
    var current

    // Gerenate fibonacci number
    while(index ++ < n){
        current = prevprev + prev
        prevprev = prev
        prev = current
    }

    return current

}
