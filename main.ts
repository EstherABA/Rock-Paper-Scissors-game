// ################# define global variables ###############
let messageWin:string = "YOU WIN!";
let messageLoss:string = "YOU LOSS!";

interface ICard {
    value: number;
    player: string;
}

let imgForCard: object = {
    paper:  '<img src="./images/icon-paper.svg">';
    scissors:  '<img src="./images/icon-scissors.svg">';
    rock: '<img src="./images/icon-rock.svg">'
};

const valueForCards: object = {
    paper: 0,
    scissors: 1,
    rock: 2
};

function getComputerMove(): ICard {
    let choice = Math.floor(Math.random() * 3)
    return {
    //   name: Cards.choice,
      value: choice,
      player: "Computer"
    }
  }

let computerChoice = getComputerMove() ;

let userChoice:ICard = {}

// On Click function happen when user choose
function handleUserChoice(id:string): ICard{
    const mainDiv = document.getElementById('main',) as HTMLDivElement | null;
    mainDiv.style.display = "none";
    
    const divOfPicked = document.getElementById('main-picked',) as HTMLDivElement | null;
    divOfPicked.style.display = "flex";
    
    const userGuess = document.getElementById('user-choice-photo',) as HTMLDivElement | null;
    userGuess?.innerHTML = imgForCard[id];

    //design the Class of div user choose 
        switch (id) {
            case 'paper': 
            userGuess?.className = "card-button paper-button";
            break; 
            case 'scissors':
            userGuess?.className = "card-button scissors-button"; 
            break; 
            case 'rock' :
            userGuess?.className = "card-button rock-button"; 
            break; 
        };
    let userChoice:ICard = {
        value: valueForCards[id],
        player: "user",
    } 
    return userChoice
   };


const designComputerDivElement = (computerChoice:ICard) =>{
    const computerBeforeChoiceDiv = document.getElementById('none-pick-yet',) as HTMLDivElement | null;
    computerBeforeChoiceDiv.style.display = "none";

    let computerChoiceDiv = document.getElementById('is-picked',) as HTMLDivElement | null;
    computerChoiceDiv.style.display = "flex";

    //design the div computer choose
    if(computerChoice.value === 0){
        computerChoiceDiv?.innerHTML = imgForCard.paper;
        computerChoiceDiv?.className = "card-button paper-button";
    }

    else if(computerChoice.value === 1){
        computerChoiceDiv?.innerHTML = imgForCard.scissors;
        computerChoiceDiv?.className = "card-button scissors-button";
    } 

    else if (computerChoice === 2) {
        computerChoiceDiv?.innerHTML = imgForCard.rock;
        computerChoiceDiv?.className = "card-button rock-button";
    }
};
designComputerDivElement(computerChoice);


const WhoWin = (playerGuess:ICard, computerGuess:ICard):ICard => {
    setTimeout(()=>{
        const textDiv = document.getElementById('all-text',) as HTMLDivElement | null;
        textDiv.style.display = "flex"
        const textResult = document.getElementById('result',) as HTMLDivElement | null;
        switch (playerGuess.value) {
            case 0:
              if (computerGuess.value === 1) textResult?.innerHTML= messageLoss
              break;
            case 1:
              if (computerGuess.value === 2) textResult?.innerHTML= messageLoss
              break;
            case 2:
              if (computerGuess.value === 0) textResult?.innerHTML= messageLoss
              break;
            default:
                {textResult?.innerHTML= messageWin}
            };
            
    
        },5000);

};

WhoWin(userChoice,computerChoice);

const playAgainBtn = () => {
    const mainDiv = document.getElementById('main',) as HTMLDivElement | null;
    mainDiv.style.display = "block";
    const mainPicked = document.getElementById('main-picked',) as HTMLDivElement | null;
    mainPicked.style.display = "none";
}

const rulesView = () => {
    const rulesImg = document.getElementById('img-rules',) as HTMLDivElement | null;
    rulesImg?.innerHTML = '<img src="./images/image-rules.svg">'
}