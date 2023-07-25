class Game {
    constructor() {
        // Get references to necessary DOM elements
        this.startScreen = document.getElementById("startScreen");
        this.gameScreen = document.getElementById("gameScreen");

        // Create a new Player instance and bind it to the game screen
        this.player = new Player(this.gameScreen);

        // Initialize arrays to store obstacles and rewards
        this.obstaclesArray = [];
        this.rewardsArray = [];

        // Initialize game state variables
        this.gameIsOver = false; // Indicates if the game is over or not
        this.score = 0; // Current score of the player
        this.lives = 5; // Number of lives the player has
    }

    // Function to start the game
    start() {
        // Hide the start screen and display the game screen
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";

        // Call the game loop function when starting the game
        this.gameLoop();
    }

    // startGame() {
    //     this.startScreen.style.display = "none";
    //     this.gameScreen.style.display = "block";

    // }
}