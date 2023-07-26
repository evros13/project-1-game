class Game {
    constructor() {
        this.startScreen = document.getElementById("startScreen");
        this.gameScreen = document.getElementById("gameScreen");
        this.gameOverScreen = document.getElementById("gameOverScreen");
        this.player = new Player(this.gameScreen);
        this.obstaclesArray = [];
        this.rewardsArray = [];
        this.obstaclesZeroLivesArray = []

        this.gameIsOver = false;
        this.score = 0; // Starting score will always be 0
        this.lives = 5; // Starting number of lives will always be 5
    }


    checkGameIsOver() {
        if (this.lives === 0) {
            this.gameIsOver = true;

            this.gameScreen.style.display = "none";
            this.gameOverScreen.style.display = "block";

        }
    }


    updateLifeCounter() {
        const livesCounter = document.getElementById("livesCounter")
        livesCounter.innerHTML = "";
        for (let i = 0; i < this.lives; i++) {
            const lifeImg = document.createElement("div");
            livesCounter.appendChild(lifeImg);
            lifeImg.className = "lives"
        }


        // We want to check how many lives we have this.lives

        // we are going to render inside livescounter as many divs as lives


    }
}

