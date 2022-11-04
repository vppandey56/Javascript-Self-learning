//Question-1
//create a variable of type string and try to add a Number to it.

let a="Vedprakash"
let b=6
console.log(a+b)
// when we add two things to the string, those things are concatenated.
//Output-Vedprakash6

//Question-2
//use typeof operator to find the datatype of the string in above question.
console.log(typeof (a+b))

//Question-3
//create a const object in javascript and can you change it to hold a number Later?
const c={
  name:"VedPrakash",
  id:1234,
  section:"A"
}
console.log(c)
//c="Ved"   // we can't change the number later.

//Question-4
//try to add a new key to the const object in problem 3 were you able to do it.
c['friend']="shivprasad"
c['name']="satya"
console.log(c)
// c is the reference to the object

//Question-5
//write a js program to create a word-meaning dictionary of 5 words.
const dict={
  appreciate:"to enjoy something or to understand the value of somebody/something",
  ataraxy:"a state of serene calmness.",
  yakka:"work, especially of a strenuous physical kind"

}
console.log(dict.yakka)
//or
console.log(dict['yakka'])//we can access in both ways.
