// Create game

class Game {
    constructor() {
        this.startScreen = document.getElementById("startScreen");
        this.gameScreen = document.getElementById("gameScreen");
        this.gameOverScreen = document.getElementById("gameOverScreen");

        this.player = new Player(this.gameScreen);
        this.obstaclesArray = [];
        this.rewardsArray = [];
        this.obstaclesZeroLivesArray = [];
        this.rewardsLifeArray = [];

        this.gameIsOver = false;
        this.score = 0;
        this.lives = 5;
        this.timeCounter = 0;
    }

    checkGameIsOver() { // The gameOverScreen appears automatically as soon as gameIsOver === true
        if (this.lives === 0) {
            this.gameIsOver = true;

            this.gameScreen.style.display = "none";
            this.gameOverScreen.style.display = "block";
            const restartButton = document.getElementById("restartButton");
            setTimeout(() => restartButton.style.display = "block", 2000);
        }
    }

    updateLifeCounter() { // Create life icons and check how many lives are left
        const livesCounter = document.getElementById("livesCounter")
        livesCounter.innerHTML = "";
        for (let i = 0; i < this.lives; i++) {
            const lifeImg = document.createElement("div");
            livesCounter.appendChild(lifeImg);
            lifeImg.className = "lives"
        }
    }
}

