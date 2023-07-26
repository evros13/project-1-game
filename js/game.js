class Game {
    constructor() {
        this.startScreen = document.getElementById("startScreen");
        this.gameScreen = document.getElementById("gameScreen");
        this.gameOverScreen = document.getElementById("gameOverScreen");
        this.player = new Player(this.gameScreen);
        this.obstaclesArray = [];
        this.rewardsArray = [];

        this.gameIsOver = false;
        this.score = 0; // Starting score will always be 0
        this.lives = 1; // Starting number of lives will always be 5
    }


    checkGameIsOver() {
        if (this.lives === 0) {
            this.gameIsOver = true;
 
            this.gameScreen.style.display = "none";
            this.gameOverScreen.style.display = "block";

        }
    }
    

    // updateLifeCounter() {
    // const lifeCounter = document.getElementById("livescounter")
    // const liveImg = document.getElementsByClassName("lives")

    //     liveImg.forEach((life, index) => {
    //         if (index < lifeCounter) {
    //             liveImg.classList.remove("hidden");
    //         } else {
    //             heart.classList.add("hidden");
    //         }
    //     });
    // }
    }






    // Start the game
    // start() {
    //     // Hide the start screen and display the game screen
    //     this.startScreen.style.display = "none";
    //     this.gameScreen.style.display = "block";

    //     console.log("testing start")
    //     this.gameLoop();
    // }