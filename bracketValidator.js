function bracketValidator(string){
    var openChars = []
    var pairs = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }

    return string.split(' ').every(function(val){
      console.log(openChars, pairs[val])
        if(val === '{' || val === '[' || val === '('){
            openChars.push(val)
        } else if(pairs[val] === openChars[length]) {
            openChars.pop()
        } else {
            return false
        }

        return true

    })

}
