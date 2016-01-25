function get_closing_paren(index, str) {
	var open_nested_parens = 0
	var position = index + 1
	var sentence = str.split(' ')
	var length = sentence.length

	while (position <= length) {
		var char = sentence[position]
    	if (char == '(') {
    		open_nested_parens += 1
    	} else if (char == ')') {
    		if (open_nested_parens === 0) {
    			return position
    		} else {
    			open_nested_parens -= 1
    		}
    	}
        position += 1

    }

    return "No closing parenthesis :("

}
