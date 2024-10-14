  //synchronous
  console.log("first")
  console.log("second")
  console.log("third")




  //asyncronous
console.log("first")

setTimeout(()=>{
  console.log("second")
},2000)

console.log("third")

// first
// third
//second