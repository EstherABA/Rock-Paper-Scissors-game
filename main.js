// ################# define global variables ###############
var messageWin = "YOU WIN!";
var messageLoss = "YOU LOSS!";
var imgForCard = {
    paper: '<img src="./images/icon-paper.svg">',
    scissors: '<img src="./images/icon-scissors.svg">',
    rock: '<img src="./images/icon-rock.svg">'
};
var valueForCards = {
    paper: 0,
    scissors: 1,
    rock: 2
};
function getComputerMove() {
    var choice = Math.floor(Math.random() * 3);
    return {
        //   name: Cards.choice,
        value: choice,
        player: "Computer"
    };
}
var computerChoice = getComputerMove();
var userChoice = {};
// On Click function happen when user choose
function handleUserChoice(id) {
    var mainDiv = document.getElementById('main');
    mainDiv.style.display = "none";
    var divOfPicked = document.getElementById('main-picked');
    divOfPicked.style.display = "flex";
    var userGuess = document.getElementById('user-choice-photo');
    userGuess === null || userGuess === void 0 ? void 0 : userGuess.innerHTML = imgForCard[id];
    //design the Class of div user choose 
    switch (id) {
        case 'paper':
            userGuess === null || userGuess === void 0 ? void 0 : userGuess.className = "card-button paper-button";
            break;
        case 'scissors':
            userGuess === null || userGuess === void 0 ? void 0 : userGuess.className = "card-button scissors-button";
            break;
        case 'rock':
            userGuess === null || userGuess === void 0 ? void 0 : userGuess.className = "card-button rock-button";
            break;
    }
    ;
    var userChoice = {
        value: valueForCards[id],
        player: "user"
    };
    return userChoice;
}
;
var designComputerDivElement = function (computerChoice) {
    var computerBeforeChoiceDiv = document.getElementById('none-pick-yet');
    computerBeforeChoiceDiv.style.display = "none";
    var computerChoiceDiv = document.getElementById('is-picked');
    computerChoiceDiv.style.display = "flex";
    //design the div computer choose
    if (computerChoice.value === 0) {
        computerChoiceDiv === null || computerChoiceDiv === void 0 ? void 0 : computerChoiceDiv.innerHTML = imgForCard.paper;
        computerChoiceDiv === null || computerChoiceDiv === void 0 ? void 0 : computerChoiceDiv.className = "card-button paper-button";
    }
    else if (computerChoice.value === 1) {
        computerChoiceDiv === null || computerChoiceDiv === void 0 ? void 0 : computerChoiceDiv.innerHTML = imgForCard.scissors;
        computerChoiceDiv === null || computerChoiceDiv === void 0 ? void 0 : computerChoiceDiv.className = "card-button scissors-button";
    }
    else if (computerChoice === 2) {
        computerChoiceDiv === null || computerChoiceDiv === void 0 ? void 0 : computerChoiceDiv.innerHTML = imgForCard.rock;
        computerChoiceDiv === null || computerChoiceDiv === void 0 ? void 0 : computerChoiceDiv.className = "card-button rock-button";
    }
};
designComputerDivElement(computerChoice);
var WhoWin = function (playerGuess, computerGuess) {
    setTimeout(function () {
        var textDiv = document.getElementById('all-text');
        textDiv.style.display = "flex";
        var textResult = document.getElementById('result');
        switch (playerGuess.value) {
            case 0:
                if (computerGuess.value === 1)
                    textResult === null || textResult === void 0 ? void 0 : textResult.innerHTML = messageLoss;
                break;
            case 1:
                if (computerGuess.value === 2)
                    textResult === null || textResult === void 0 ? void 0 : textResult.innerHTML = messageLoss;
                break;
            case 2:
                if (computerGuess.value === 0)
                    textResult === null || textResult === void 0 ? void 0 : textResult.innerHTML = messageLoss;
                break;
            default:
                {
                    textResult === null || textResult === void 0 ? void 0 : textResult.innerHTML = messageWin;
                }
        }
        ;
    }, 5000);
};
WhoWin(userChoice, computerChoice);
var playAgainBtn = function () {
    var mainDiv = document.getElementById('main');
    mainDiv.style.display = "block";
    var mainPicked = document.getElementById('main-picked');
    mainPicked.style.display = "none";
};
var rulesView = function () {
    var rulesImg = document.getElementById('img-rules');
    rulesImg === null || rulesImg === void 0 ? void 0 : rulesImg.innerHTML = '<img src="./images/image-rules.svg">';
};
