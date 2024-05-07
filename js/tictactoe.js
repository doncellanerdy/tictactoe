class TicTacToe{
  constructor(x, o){
    this.xCharacter = x
    this.oCharacter = o
    this.currentBoardState = [0,1,2,3,4,5,6,7,8]
    this.currentPlayer = ""
  }

  checkPlay(playerShape, position){
    if(playerShape !== this.xCharacter && playerShape !== this.oCharacter){
      console.log("No such player")
      return false
    }else if(position > 8){
      console.log("Play is out of bounds")
      return false
    }else if(playerShape != this.currentPlayer && this.currentPlayer != ""){
      console.log("Not your turn")
      return false
    }else if(typeof(this.currentBoardState[position]) != "number"){
      console.log("You must choose an empty square")
      return false
    }else{
      return true
    }
  }

  updatingBoardState(playerShape, position){
    let msg = ""

    if(this.checkPlay(playerShape, position)){
        this.currentBoardState[position] = playerShape
        msg = this.checkWin(playerShape, position)
        this.currentPlayer = (playerShape === this.xCharacter ? this.oCharacter : this.xCharacter)
    }
    return msg
  }

  checkWin(){
    let msg = ""

    if((this.currentBoardState[0] === this.currentBoardState[1] && this.currentBoardState[0] === this.currentBoardState[2])
    || (this.currentBoardState[3] === this.currentBoardState[4] && this.currentBoardState[3] === this.currentBoardState[5])
    || (this.currentBoardState[6] === this.currentBoardState[7] && this.currentBoardState[6] === this.currentBoardState[8])
    || (this.currentBoardState[0] === this.currentBoardState[3] && this.currentBoardState[0] === this.currentBoardState[6])
    || (this.currentBoardState[1] === this.currentBoardState[4] && this.currentBoardState[1] === this.currentBoardState[7])
    || (this.currentBoardState[2] === this.currentBoardState[5] && this.currentBoardState[2] === this.currentBoardState[8])
    || (this.currentBoardState[0] === this.currentBoardState[4] && this.currentBoardState[0] === this.currentBoardState[8])
    || (this.currentBoardState[2] === this.currentBoardState[4] && this.currentBoardState[2] === this.currentBoardState[6])){
      msg =  `Winner!! ${this.currentPlayer} won!!!`
    }else if(this.currentBoardState.some(element => typeof element === "number") === false){
      msg =  "Stalemate"
    }
    return msg
  }

  reset(){
    for(let i=0; i<this.currentBoardState.length; i++){
      this.currentBoardState[i] = i
    }
    this.currentPlayer = ""
  }
}

let game1 = new TicTacToe("X","O")

let clickers = document.querySelectorAll(".boardGrid")
clickers.forEach(element => element.addEventListener("click", playTictactoe))
document.querySelector(".reset").addEventListener("click", resetBoard)

function playTictactoe(event){
  let player = game1.currentPlayer || "X";
  let position = event.target.parentElement.parentElement.className
  event.target.style.visibility = "visible"
  event.target.classList.remove("boardGrid")

  document.querySelector("p").innerHTML = game1.updatingBoardState(player, position)
  player = game1.currentPlayer
  updatePlayer(player)
}

function updatePlayer(player){
  let grid = document.querySelectorAll(".boardGrid")
  grid.forEach(element => element.innerHTML = player)
  document.querySelector('.currentPlayer').innerHTML = player
}

function resetBoard(){
  location.reload();
}
