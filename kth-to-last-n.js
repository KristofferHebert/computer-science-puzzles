function LinkedListNode(value){
    return {
        value: value,
        next: null
    }
}

function kth_to_last_node(int, node){
    var prev = []
    var nextNode = node.next
    var result

    while(nextNode.next !== null) {
        prev.push(nextNode)
        nextNode = nextNode.next
    }

    result = prev[(prev.length + 1) - int]
    return (result) ? result.value : null

}

var a = LinkedListNode("Angel Food")
var b = LinkedListNode("Bundt")
var c = LinkedListNode("Cheese")
var d = LinkedListNode("Devil's Food")
var e = LinkedListNode("Eccles")

a.next = b
b.next = c
c.next = d
d.next = e

console.log(kth_to_last_node(2, a))
