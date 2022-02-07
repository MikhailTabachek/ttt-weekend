/*-------------------------------- Constants --------------------------------*/
const winArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


/*---------------------------- Variables (state) ----------------------------*/
let squareArr, turn, winner



/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById("message")


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

function handleClick(evt){
let index = evt.target.id[2]

if (squareArr[index] || winner){
  return
}
squareArr[index] = turn

if(turn === 1){
document.querySelector("#message").innerText = "Now O's Turn"
message.style.color = "orange"
} else if(turn === -1){
  document.querySelector("#message").innerText = "Now X's Turn"
  message.style.color = "#228B22"
}

turn *= -1
console.log(squareArr)
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
function getWinner(){
  for(let i = 0; i < winArr.length; i++){
    const winCondition = winArr[i];
    const a = squareArr[winCondition[0]];
    const b = squareArr[winCondition[1]];
    const c = squareArr[winCondition[2]];
    // console.log(a, b, c)
    // console.log(squareArr[2])
    // console.log(winner)
    // console.log(square)
    const noNull = (element) => element === null;
    console.log(squareArr.some(noNull));
    if(a === b && b === c && (a !== null && b !== null && c !== null)){
      
      winner = turn;
      
      if(winner === 1){
        message.innerText = "Woo-Hoo! The winner is : O "
        gameover.innerText = "Please click restart button to start a new game"
      } else if(winner === -1) {
        message.innerText = "Woo-Hoo! The winner is : X"
        gameover.innerText = "Please click restart button to start a new game"
      }
      reset.removeAttribute("hidden")
      return
    } 
    else if(squareArr.some(noNull) === false){
      winner = "t"
      message.innerText = "You've got Tie!"
      gameover.innerText = "Please click restart button to start a new game"
      reset.removeAttribute("hidden")
    }
   
      
    } 
    

    //   if (winner = "t"){
    //     message.innerText = "You've got Tie!"
    //     gameover.innerText = "Please click restart button to start a new game"
    // }
    // else if (a !== null && b !== null && c !== null && (a !== b && a !== c)) {
      
    //   winner = "t"

    //   if (winner = "t"){
    //     message.innerText = "You've got Tie!"
    //     gameover.innerText = "Please click restart button to start a new game"
    //   }
     return
    }
//   }
// }

// reset.addEventListener("click", remove())

function remove(){
  location.reload();
  // querySelector(".square").innerText
}
