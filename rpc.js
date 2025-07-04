let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userScorePara = document.querySelector("#youScore");
const computerScorePara = document.querySelector("#compScore");

const genComputerChoice =()=>{
    const options = ["rock","paper","scissors"];
    // to generate rock , paper and scissors - choices by computer randomly
   const randomIndex= Math.floor(Math.random()*3 );   
    return options[randomIndex];
}

const drawGame = () => {
    message.innerText = "Game was draw! Play again.";
    message.style.backgroundColor = "grey";
}

const showWinner = (userWin, userChoice,computerChoice)=> {
    if(userWin){
      userScore++;
      userScorePara.innerText = userScore;
       message.innerText = `You win :)  Your ${userChoice} beats ${computerChoice}`;
       message.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
      message.innerText = `You loose :(   ${computerChoice} beats your ${userChoice}`;
      message.style.backgroundColor = "red";
    }
};

const playgame=(userChoice)=>{
    const computerChoice = genComputerChoice();          //generate computer's choice this is called modular way of programming means hr ek kaam ke liye ek fucn banana
    if(userChoice == computerChoice){
    drawGame();                                          //draw game condition
    } else{
    let userWin = true;
    if(userChoice == "rock"){
        userWin = computerChoice == "paper" ? false : true;      //scissors,paper
    }else if(userChoice == "paper"){
        userWin = computerChoice == "scissors"  ? false : true;       //scissors, rock
    }else{
        userWin = computerChoice ==  "rock" ? false : true;         //rock,paper
    }
    showWinner(userWin, userChoice,computerChoice);
  }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
    playgame(userChoice);
    })
})