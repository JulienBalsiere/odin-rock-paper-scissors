// Fonction qui permet de récupérer le choix du computer
function getComputerChoice() {
  // La fonction doit retourner aléatoirement paper, rock ou scissors
  // On prend un nb avec math.random entre 0 et 1, qu'on multiplie par 3 et qu'on arrondie à l'entier supérieur pour avoir 1, 2 ou 3.
  const random = Math.floor(Math.random() * 3);

  if (random === 0) return "Rock";
  if (random === 1) return "Paper";
  return "Scissors";
}

// Fonction qui permet de récupérer le choix de l'utilisateur
function getHumanChoice() {
  let playerChoice = window.prompt("Choose between Rock, Paper or Scissors");
  return playerChoice;
}

// Amorcer les variables qui traquent le score des joueurs.
let humanScore = 0;
let computerScore = 0;

// Fonction qui permet de jouer un round avec en paramètres le choix des joueurs
// La fonction incrémente le score du joueur gagnant et annonce le vainqueur du round.

function playRound(humanChoice, computerChoice) {
  // prendre la valeur de human et computer et la passer en lowercase.
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();
  // comparer ces valeurs et faire les possibilité dans des ifs.
  // Retourner le gagnant
  // incrémenter le score
  if (human === "rock" && computer === "paper") {
    computerScore += 1;
    return "You lose! Paper beats Rock";
  } else if (human === "rock" && computer === "scissors") {
    humanScore += 1;
    return "You win ! Rock beats Scissors";
  } else if (human === "paper" && computer === "scissors") {
    computerScore += 1;
    return "You lose! Scissors beats Paper";
  } else if (human === "paper" && computer === "rock") {
    humanScore += 1;
    return "You win ! Paper beats Rock";
  } else if (human === "scissors" && computer === "rock") {
    computerScore += 1;
    return "You lose ! Rock beats Scissors";
  } else if (human === "scissors" && computer === "paper") {
    humanScore += 1;
    return "You win ! Scissors beats paper";
  } else {
    return "It's a tie !"
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
