function rotationPoint(wordsArray){
    if(!Array.isArray(wordsArray)) {
        throw new Error('Please provide Array')
    }

    var alphabetValue = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26
    }

    function binarySearch(words){

        if(words.length === 1)
            return words[0]

        var middle = words.length / 2
        var firstCharValue = alphabetValue[words[middle].charAt(0)]

        if(firstCharValue < 13)
            binarySearch(words.slice(0, middle))
        else
            binarySearch(words.slice(middle, words.length))

    }

    return wordsArray.indexOf(binarySearch(wordsArray))

}

var wordsArray = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]

console.log(rotationPoint(wordsArray))
