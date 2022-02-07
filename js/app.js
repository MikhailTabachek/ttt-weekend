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

function getWinner(){
  for(let i = 0; i < winArr.length; i++){
    const winCondition = winArr[i];
    const a = squareArr[winCondition[0]];
    const b = squareArr[winCondition[1]];
    const c = squareArr[winCondition[2]];
    const noNull = (element) => element === null;
    if(a === b && b === c && (a !== null && b !== null && c !== null)){
    winner = turn;
    if(winner === 1){
        message.innerText = "Woo-Hoo! The winner is : O "
        gameover.innerText = "Please click restart button to start a new game"
    } else if(winner === -1) {
        message.innerText = "Woo-Hoo! The winner is : X"
        gameover.innerText = "Please click restart button to start a new game"
    }
    return
    } 
    else if(squareArr.some(noNull) === false){
      winner = "t"
      message.innerText = "You've got Tie!"
      gameover.innerText = "Please click restart button to start a new game"
    }
    } 
    return
    }

function remove(){
  // location.reload();
   sq1.innerText= ""
    sq2.innerText= ""
    sq3.innerText= ""
    sq4.innerText= ""
    sq5.innerText= ""
    sq6.innerText= ""
    sq7.innerText= ""
    sq8.innerText= ""
    sq0.innerText= ""
    gameover.innerText = ""
    message.innerText = "Please click on the empty square to begin."
    message.style.color = "black"
    init()
  }


