/*
There are 7 types os primitives
Null
Number
String
Symbool
Boolean
BigInt
Undefined
*/

let a=null
let b=467
let c="ved"
let d=Symbol("is it true")
let e=true
let f=BigInt("456")+BigInt("7")
let g=undefined
console.log(a,b,c,d,e,f,g)

// for check type of variable
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))


//Object in JS
// Non-Primitives data type in JS
const item={
  "Ved":true,
  "satya":false,
  "Love":78,
  "tom":undefined
}
console.log(item["satya"])
console.log(item["Ved"])
console.log(item["Love"])
console.log(item["tom"])
