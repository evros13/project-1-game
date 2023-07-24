console.log("Testing player.js")

class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        // this.directionX = 0;
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


            console.log("playeroffset")
            this.updatePosition();


        if (key === "ArrowLeft") {
            console.log(this.playerElement.offsetLeft)
            
            this.playerPosition -= 10;
            this.updatePosition();
        }
        else if (key === "ArrowRight") {
            this.playerPosition += 10;
            this.updatePosition();
        }
        

        // ADD RULE HERE - set boundaries
        // facing here


     }

    updatePosition() {
        this.playerElement.style.left = this.playerPosition + "px";
    }

    // hitByObstacle(obstacle) {
    //     const playerHitBox = this.element.getBoundingClientRect();
    //     const obstacleHitBox = obstacle.element.getBoundingClientRect();

    //     if (
    //         playerHitBox.left < obstacleHitBox.right &&
    //         playerHitBox.right > obstacleHitBox.left &&
    //         playerHitBox.top < obstacleHitBox.bottom &&
    //         playerHitBox.bottom > obstacleHitBox.top
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}