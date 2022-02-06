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

// console.log()

function handleClick(evt){
let index = evt.target.id[2]

if (squareArr[index] || winner){
  console.log(index)
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
  }
}
getWinner()
}



// function getWinner() {
//   let winCalc = winArr
//   let totalArrs = []
//   let total = 0
//   // winCalc.forEach((element) => {
//   //   totalArrs = totalArrs.concat(element)
//   // })

//   console.log(totalArrs)

//   winCalc.forEach(function(element){
//     total = element.reduce((first, second) => first + squareArr[second], 0)
//     totalArrs.push(total)
//     console.log(element)
//     console.log(total)
//     })

//   console.log(totalArrs)

//   let foundWinner = totalArrs.find(element => element === 3 || element === -3)

//   if(foundWinner > 0){
//     console.log("X is winner")} else if(foundWinner < 0) {
//       console.log("O is winner")
//     }
//   }
    
  


  




    
  





// function getWinner(){
// winArr.forEach(function(arr){
//     arr.forEach(function(winComb){
//       let total = 0
//       total += winComb
//       console.log(total)
//     })
//   })

  // }
function getWinner(){ //check if we have a winner condition
  for(let i = 0; i < winArr.length; i++){
    const winCondition = winArr[i];
    const a = squareArr[winCondition[0]];
    const b = squareArr[winCondition[1]];
    const c = squareArr[winCondition[2]];
    console.log(a, b, c)
    if(a === b && b === c && (a !== null && b !== null && c !== null)){
      
      winner = turn;
      if(turn === 1){
        message.innerText = "the winner is : X"
      } else {
        message.innerText = "the winner is : O"
      }
      
      
      return;
    }
  }
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