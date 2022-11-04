//var
var a=36
var b="ved"
var c=null
var d=undefined
{
  var b="prakash"  //var is not block scoped it is globally scoped
  console.log(b)
}
console.log(b)

//let
var a=36
let b="ved"
var c=null
var d=undefined
{
  let b="prakash"  //let is block scoped
  console.log(b)
}
console.log(b)

//constant
const author="vedprakash"
//author=0 //Not allowed
console.log(author)
