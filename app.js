
var winnerScore = [0, 0]
var computerSelect = Math.floor(Math.random())


class Game{
  constructor(player,computer){
      this.playerChoice = player
      this.computerChoice = computer
      this.winner =  [0,0]
  }
  
  get getplay(){
    if (this.computerChoice < 6) {
    this.computerSelect = "Камень";
    } else if (this.computerChoice <= 12) {
      this.computerSelect = "Бумага";
    } else {
      this.computerSelect = "Ножницы";
    }
    return  this.computerSelect
   }
   get compares(){
    if (this.playerChoice === player === "Камень" && computer === "Бумага"|| player === "Бумага" && computer === "Ножницы" || player === "Ножницы" && computer === "Камень" ) {
      return this.compare="Компьютер";}
     else if (this.playerChoice === "Бумага" && this.computerSelect === "Камень"|| this.playerChoice === "Ножницы" && this.computerSelect === "Бумага"||this.playerChoice === "Камень" && this.computerSelect === "Ножницы")  {
      return this.compare="Игрок";
    }else if(this.playerChoice === this.computerSelect){
      return this.compare = "Ничья"
    }
   }

   get checkWinner(){
    if (this.compare === "Игрок") {
      this.winner[0]++
    }else if (this.compare === "Компьютер") {
      this.winner[1]++;
    } else if (this.compare === "Ничья" ) {
      this.winner[0]++;
      this.winner[1]++;
    }
   }

}
 
const btn = document.querySelector('button')
function StartGame(){
  let game =  new Game(prompt(),computerSelect)
  alert(`выбрал комп: ${game.getplay}`)
  h2node.innerHTML = game.getplay
  alert(`выиграл ${game.compares}`)
}

btn.addEventListener('click',StartGame)


