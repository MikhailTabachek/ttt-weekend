/*-------------------------------- Constants --------------------------------*/
const winArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


/*---------------------------- Variables (state) ----------------------------*/
let squareArr, turn, winner



/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById("message")
// const square0 = document.getElementById("sq0")
// const square1 = document.getElementById("sq1")
// const square2 = document.getElementById("sq2")
// const square3 = document.getElementById("sq3")
// const square5 = document.getElementById("sq5")
// const square6 = document.getElementById("sq6")
// const square7 = document.getElementById("sq7")
// const square8 = document.getElementById("sq8")



/*----------------------------- Event Listeners -----------------------------*/

document.querySelectorAll(".square").forEach(element => element.addEventListener("click", handleClick))

/*-------------------------------- Functions --------------------------------*/

init();

function init(){
  squareArr = [1, 1, 1, null, null, null, null, null, null]
  turn = 1
  winner = null
  // render();
// console.log()
}

console.log()

function handleClick(evt){
// if turn > 0 &&  => -1,  else if turn <0 => 1
let index = evt.target.id[2]
if (squareArr[index] || winner){
  return
}

squareArr[index] = turn

turn *= -1

console.log(squareArr)
}

function render(){

}


//  arr1 = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
// arr1.forEach(function(win){
// win.forEach(winWin){
// compare if element with index 0 = 0 && 1 = 1 && = 2 
// }
// })

// arr2 = [1, 1, 1, -1, null, null, null, null, null]
// arr2 = [0, 1, 2,    3,    4,    5,    6,    7,    8]

// if index 0 in array 2 = 1 