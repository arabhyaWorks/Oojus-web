const array = new Array(5).fill("https://images.unsplash.com/photo-1634170380004-")
// console.log(array, array.length)  
array.map((image, index) => (
  console.log("array",image, index.toString())
))


