function isPrime(number) {

    if(isNaN(number)){
        return false
    }

    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}
