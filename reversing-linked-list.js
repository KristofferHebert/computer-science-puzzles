function swapList(array) {
        var result = array.reverse()

        result.map(function(list, i){
            if(i = result.length) result.next = null
            list.next = result[i + 1].value || null

        })

        return result
}
