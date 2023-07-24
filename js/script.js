console.log("Testing script.js")


//(backlog) WHEN LOADING THE PAGE = STARTSCREEN 
// WHEN LOADING THE PAGE - GAMESCREEN

// When game starts, timeout of 3 seconds before "enemies" start falling down (backlog) and timeout of 7 seconds before "rewards" start falling down

// Player is in the middle and moves from there when pressing down keys

const gameScreen = document.getElementById("gameScreen");

const newGame = new Game()
const newPlayer = newGame.player
document.addEventListener("keydown", function(event) {
    newPlayer.playerMoves(event.key);
})
console.log(newPlayer.playerElement.style.position);


