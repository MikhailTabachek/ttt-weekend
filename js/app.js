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
  squareArr = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render();
console.log()
}

console.log()

function handleClick(evt){
let index = evt.target.id[2]
if (squareArr[index] || winner){
  return
}
squareArr[index] = turn
console.log(squareArr)

if(turn === 1){
document.querySelector("#message").innerText = "Now O's Turn"
} else if(turn === -1){
  document.querySelector("#message").innerText = "Now X's Turn"
}

turn *= -1

// console.log(squareArr)

render()
}



function render(){

squareArr.forEach(itr)

function itr(element, index) {
  let xSym = `sq${index}`
  if(element === 1){
  document.getElementById(xSym).innerText = "X"
  } else if (element === -1) {

  document.getElementById(xSym).innerText = "O"
  console.log(`${index}`)
  }
}
}
function getWinner(i) {
  let sum = 0 
  array.forEach((item) => {
    if(Array.isArray(item)) {
     sum += sumItems(item);
    } else {
    sum += item;
    }
  })
  return sum;
}


// function getWinner(){
// winArr.forEach(function(arr){
//     arr.forEach(function(winComb){
//       let total = 0
//       total += winComb
//       console.log(total)
//     })
//   })

  // }
// function getWinner(){ //check if we have a winner condition
//   for (let i=0; i<8; i++){
//     const winCondition = winArr[i];
//     const a = board[winCondition[0]];
//     const b = board[winCondition[1]];
//     const c = board[winCondition[2]];
//     //console.log(a,b,c)
//     if(a === b && b === c && (a !== null && b !== null && c !== null)){
      
//       winner = turn;
//       return;
//     }
//   }
// }



//  arr1 = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
// arr1.forEach(function(win){
// win.forEach(winWin){
// compare if element with index 0 = 0 && 1 = 1 && = 2 
// }
// })

// arr2 = [1, 1, 1, -1, null, null, null, null, null]
// arr2 = [0, 1, 2,    3,    4,    5,    6,    7,    8]

// if index 0 in array 2 = 1 