console.log("Testing player.js")

class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.playerElement = document.getElementById("player");
        this.playerPosition = this.gameScreen.offsetWidth / 2;
    }

    playerMoves(key) {
        
        if (this.playerElement.offsetLeft + this.playerElement.offsetWidth  > this.gameScreen.offsetWidth - this.gameScreen.style.width) {
           this.playerPosition = this.gameScreen.offsetWidth - this.playerElement.offsetWidth
        }
        
        else if (this.playerPosition < this.playerElement.offsetWidth) {
            this.playerPosition = this.playerElement.offsetWidth;
        }
            this.updatePosition();


        if (key === "ArrowLeft") {
            
            this.playerPosition -= 10;
            this.playerElement.style.backgroundImage = 'url("./images/notfinalplayeredited.png")'
            this.updatePosition();
        }
        else if (key === "ArrowRight") {
            this.playerPosition += 10;
            this.playerElement.style.backgroundImage = 'url("./images/notfinalplayereditedright.png")'
            this.updatePosition();

        }
        
        // facing here


     }

    updatePosition() {
        this.playerElement.style.left = this.playerPosition + "px";
    }

    hitByObstacle(obstacle) {
        const playerHitBox = this.playerElement.getBoundingClientRect();
        const obstacleHitBox = obstacle.element.getBoundingClientRect();

        if (
            playerHitBox.left < obstacleHitBox.right &&
            playerHitBox.right > obstacleHitBox.left &&
            playerHitBox.top < obstacleHitBox.bottom &&
            playerHitBox.bottom > obstacleHitBox.top
        ) {
            console.log("has been hit")
            return true;
        } else {
            return false;
        }
    }
}