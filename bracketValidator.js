function bracketValidator(string){
    var openChars = []
    var pairs = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }

    string.split(' ').every(function(val){
        if(val === '{' || val === '[' || val === '(')
            openChars.push(val)
        else if(pairs[val] === openChars[length]) {
            openChars.pop()
            return t
        } else {
            return false
        }
    })

    return true
}
