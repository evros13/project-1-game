// Create player and the movement functions

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
            this.playerElement.style.backgroundImage = 'url("./images/playereditedleft.png")'
            this.updatePosition();
        }
        else if (key === "ArrowRight") {
            this.playerPosition += 10;
            this.playerElement.style.backgroundImage = 'url("./images/playeredited.png")'
            this.updatePosition();
        }
     }

    updatePosition() {
        this.playerElement.style.left = this.playerPosition + "px";
    }
}