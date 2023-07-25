class Game {
    constructor() {
        this.startScreen = document.getElementById("startScreen");
        this.gameScreen = document.getElementById("gameScreen");
        this.player = new Player(this.gameScreen);
        this.obstaclesArray = [];
        this.rewardsArray = [];

        this.gameIsOver = false; 
        this.score = 0; // Starting score will always be 0
        this.lives = 5; // Starting number of lives will always be 5
    }

    // Start the game
    // start() {
    //     // Hide the start screen and display the game screen
    //     this.startScreen.style.display = "none";
    //     this.gameScreen.style.display = "block";

    //     console.log("testing start")
    //     this.gameLoop();
    // }


    
    
}