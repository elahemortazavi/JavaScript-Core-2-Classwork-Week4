/*

Exercise 2
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/
// part1
setTimeout(() => {
  document.getElementById("main").style.backgroundColor = "red";
}, 5000);


// part2
const colors = ["red", "blue", "green", "yellow", "purple"];
let index = 0;

setInterval(() => {
  document.getElementById("main").style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 5000);



// class solution
setInterval(()=>{
  let colour= randomColor()
  document.getElementById("main").style.backgroundColor =colour;
},5000)

function randomColor(){
return  Math.floor(Math.random() * 16777215).toString(16);}