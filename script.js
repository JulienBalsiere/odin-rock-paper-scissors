// Fonction qui permet de récupérer le choix de l'ordi
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
