console.log("Testing game.js")

class Game {
    constructor() {
        this.startScreen = document.getElementById("startScreen");
        this.gameScreen = document.getElementById("gameScreen");
        this.player = new Player(this.gameScreen);
        this.obstaclesArray = [];
        this.rewardsArray =[];
        this.gameIsOver = false;
        this.score = 0;
        this.lives = 5;

    }

    update() {
        console.log("update")
        this.player.playerMoves();
    }


    
    

    // startGame() {
    //     this.startScreen.style.display = "none";
    //     this.gameScreen.style.display = "block";
        
    // }
}