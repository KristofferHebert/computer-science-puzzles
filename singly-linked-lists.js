/*
You have a singly-linked list ↴ and want to check if it contains a cycle.
A singly-linked list is built with Nodes, where each node has:

node.next—the next node in the list.
node.data—the data held in the node. For example, if our linked list stores people in line at the movies, node.data might be the person's name.
A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

Write a function contains_cycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.

For this problem, you cannot make any changes to the Node class.
https://www.interviewcake.com/question/python/linked-list-cycles
*/

function Node(name){
    return {
        name : name,
        data: null,
        next : null
    }
}

function containsCycle(node){
    let hash = {}
    function next(node){
        if(hash[node.name]){
            return true
        }
        if(node.next === null){
            return false
        }
        hash[node.name] = node
        console.dir(hash)
        next(node.next)
    }
    return next(node)
}


let a = Node('A')
let b = Node('B')
let c = Node('C')

a.next = b
b.next = c
c.next = a

console.log(containsCycle(a))
