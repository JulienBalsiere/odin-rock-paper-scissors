// Récupérer le choix du computer
function getComputerChoice() {

  const random = Math.floor(Math.random() * 3);

  if (random === 0) return "Rock";
  if (random === 1) return "Paper";
  return "Scissors";
}

// Récupérer l'input utilisateur
function getHumanChoice() {
  let playerChoice = window.prompt("Choose between Rock, Paper or Scissors");
  return playerChoice;
}

// Création des compteurs de score.
let humanScore = 0;
let computerScore = 0;

// Fonctionnement d'un round
function playRound(humanChoice, computerChoice) {
  // Transformer les inputs en lowercase
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === "rock" && computer === "paper") {
    computerScore += 1;
    return "You lose this round! Paper beats Rock";
  } else if (human === "rock" && computer === "scissors") {
    humanScore += 1;
    return "You win this round! Rock beats Scissors";
  } else if (human === "paper" && computer === "scissors") {
    computerScore += 1;
    return "You lose this round! Scissors beats Paper";
  } else if (human === "paper" && computer === "rock") {
    humanScore += 1;
    return "You win this round! Paper beats Rock";
  } else if (human === "scissors" && computer === "rock") {
    computerScore += 1;
    return "You lose this round! Rock beats Scissors";
  } else if (human === "scissors" && computer === "paper") {
    humanScore += 1;
    return "You win this round! Scissors beats paper";
  } else {
    return "It's a tie !"
  }
}

// Fonction pour compater les scores et déclarer le vainqueur de la partie
function winnerIs(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return "Congratulations, you win the game !";
  } else if (humanScore < computerScore) {
    return "You lose, computer win the game.";
  } else {
    return "It's a tie";
  }
}

// Fonction pour lancer une partie en 5 rounds.
function playGame() {
  // Utilisation de variables globales.
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(result);
    console.log(`Round ${i + 1} Your score is ${humanScore}, Computer socres is ${computerScore}`) ;
  }
  console.log(winnerIs(humanScore, computerScore));
}
