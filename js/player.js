console.log("Testing player.js")

class Player {
    constructor(gameScreen, left, top) {
        this.gameScreen = gameScreen;
        this.left = "50vw";
        this.bottom = "0";
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        
        this.element.style.position = "absolute";
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    }
}