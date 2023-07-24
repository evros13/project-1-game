class Game {
    constructor() {
        this.startScreen = document.getElementById("startScreen");
        this.gameScreen = document.getElementById("gameScreen");
        this.player = document.getElementById("player");

    }

    startGame() {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        
    }
}