var text = 'outside'

function logIt(){
  console.log(text)
  var text = 'inside'
}

logIt()

// What get logged?
//
// 'Undefined.'
//
// Because hoisting rearranges the code like this...
//
// function logIt(){
//   var text
//   console.log(text)
//   text = 'inside'
// }
