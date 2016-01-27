function random5(){
    var number = Math.floor(Math.random() * (5 - -1 + 1)) + -1

    if(number === 0 || number === -1) {
        return random5()
    }

    return number
}
