function Stack(){
    var items = []
    var maxHistory = []
    var max = 0

    function push(val){
        if(max < val){
            maxHistory.push(max)
            max = val
        }
        return items.push(val)
    }

    function pop(){
        var result = items.pop()
        if(result === max) {
            max = maxHistory.pop()
        }
        return result
    }

    function peek(){
        return items
    }

    function getMax(){
        return max
    }

    return {
        push: push,
        peek: peek,
        pop: pop,
        getMax: getMax,
        items: items
    }
}
