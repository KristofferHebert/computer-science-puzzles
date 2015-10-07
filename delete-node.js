/*
Delete a node from a singly-linked list ↴ , given only a variable pointing to that node.
https://www.interviewcake.com/question/python/delete-node
*/

function Node(name){
    return {
        name : name,
        next : null
    }
}

function deleteNode(node){
    let nextNode = node.next

    if(nextNode){
        node.name = nextNode.name
        node.next = nextNode.next
        return node
    }

    console.error('next node does not exist');
}


let a = Node('A')
let b = Node('B')
let c = Node('C')

a.next = b
b.next = c

deleteNode(b)
