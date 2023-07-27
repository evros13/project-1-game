// The code below will be rendered as soon as the window is loaded.
window.onload = function () {

    const gameScreen = document.getElementById("gameScreen");
    const newGame = new Game()
    const newPlayer = newGame.player;

    function startGame() {
        gameLoop(); // Use setTimeout and setInterval to create and move obstacles and rewards at regular intervals

        setTimeout(() => setInterval(createObstacle, 3000), 350);
        setTimeout(() => setInterval(createReward, 5000), 10000);
        setTimeout(() => setInterval(createObstacleZeroLives, 7000), 15000);
        setTimeout(() => setInterval(createRewardLife, 8000), 15000);
        setTimeout(() => setInterval(createObstacle, 1000), 20000);
        setInterval(moveObstacle, 20);
        setInterval(moveReward, 20);
        setInterval(moveObstacleZeroLives, 20);
        setInterval(moveRewardLife, 20);
        scoreCounterFunction(newGame); // Call the scoreCounterFunction to update the game score
        createTimeCounter();   
    }

    function createTimeCounter() { // Offset different speeds of obstacles&rewards
        setInterval(() => {
            newGame.timeCounter += 1;
        }, 1000);
    }

    function scoreCounterFunction(newGame) { // Update the score counter at regular intervals
        const scoreCounter = document.getElementById("scoreCounter");
        setInterval(() => {
            scoreCounter.innerHTML = newGame.score++;
        }, 700);
    }

    const startButton = document.getElementById("startButton")
    startButton.addEventListener("click", function () { // Game starts when pressing the startButton
        startGame()
        startButton.style.display = "none";
        player.style.display = "block";
        scoreCounter.style.display = "block";
    })

    const restartButton = document.getElementById("restartButton")
    restartButton.addEventListener("click", function () { // Game will restart
        window.location.reload();
    })

    document.addEventListener("keydown", function (event) { // Links the keyboard input to the code
        newPlayer.playerMoves(event.key);
    });

    function gameLoop() { // All functions inside the loop will run continuously 
        frames++;

        newGame.updateLifeCounter();
        hitByObstacle();
        hitByObstacleZeroLives();
        hitByReward();
        hitByRewardLife();
        requestAnimationFrame(gameLoop);
        newGame.checkGameIsOver();
    }

    // Functions to create and move obstacles

    function createObstacle() {
        const obstacle = document.createElement("div");
        gameScreen.appendChild(obstacle);
        obstacle.className = "obstacle";
        obstacle.style.top = 0;
        obstacle.style.left = (Math.random() * (newGame.gameScreen.offsetWidth - obstacle.offsetWidth)) + "px";
        newGame.obstaclesArray.push(obstacle);
    }

    function moveObstacle() {
        for (let i = 0; i < newGame.obstaclesArray.length; i++) {
            let currentPositionObstacle = parseInt(newGame.obstaclesArray[i].style.top);
            newGame.obstaclesArray[i].style.top = (currentPositionObstacle + 1) + "px";

            if (newGame.timeCounter >= 11 && newGame.timeCounter <= 25) {
                newGame.obstaclesArray[i].style.top = (currentPositionObstacle + 2) + "px";
            }

            else if (newGame.timeCounter >= 26 && newGame.timeCounter <= 40) {
                newGame.obstaclesArray[i].style.top = (currentPositionObstacle + 3) + "px";
            }

            else if (newGame.timeCounter >= 41) {
                newGame.obstaclesArray[i].style.top = (currentPositionObstacle + 4) + "px";
            }

            if (newGame.obstaclesArray[i].offsetTop >= 470) {
                newGame.obstaclesArray[i].remove();
                newGame.obstaclesArray.splice(i, 1);
            }
        }
    }

    // Functions to create and move obstacles and check if player collides with them

    function hitByObstacle() {
        newGame.obstaclesArray.forEach((obstacle) => {
            const playerPosition = newPlayer.playerElement.getBoundingClientRect();
            const obstaclePosition = obstacle.getBoundingClientRect();

            if (
                playerPosition.left < obstaclePosition.left + obstaclePosition.width &&
                playerPosition.left + playerPosition.width > obstaclePosition.left &&
                playerPosition.top < obstaclePosition.top + obstaclePosition.height &&
                playerPosition.top + playerPosition.height > obstaclePosition.top
            ) {
                obstacle.remove();
                newGame.lives -= 1;
            }

            if (newGame.lives === 0) {
                newGame.gameIsOver = true;
            }
        });
    }

    // Functions to create and move rewards and check if player collides with them

    function createReward() {
        const reward = document.createElement("div");
        gameScreen.appendChild(reward);
        reward.className = "reward";
        reward.style.top = 0;
        reward.style.left = (Math.random() * (newGame.gameScreen.offsetWidth - reward.offsetWidth)) + "px";
        newGame.rewardsArray.push(reward);
    }

    function moveReward() {
        for (let i = 0; i < newGame.rewardsArray.length; i++) {
            let currentPositionReward = parseInt(newGame.rewardsArray[i].style.top);
            newGame.rewardsArray[i].style.top = (currentPositionReward + 1) + "px";

            if (newGame.timeCounter >= 11 && newGame.timeCounter <= 25) {
                newGame.rewardsArray[i].style.top = (currentPositionReward + 2) + "px";
            }

            else if (newGame.timeCounter >= 26 && newGame.timeCounter <= 40) {
                newGame.rewardsArray[i].style.top = (currentPositionReward + 3) + "px";
            }

            else if (newGame.timeCounter >= 41) {
                newGame.rewardsArray[i].style.top = (currentPositionReward + 4) + "px";
            }

            if (newGame.rewardsArray[i].offsetTop >= 470) {
                newGame.rewardsArray[i].remove();
                newGame.rewardsArray.splice(i, 1);
            }
        }
    }

    function hitByReward() {
        newGame.rewardsArray.forEach((reward) => {
            const playerPosition = newPlayer.playerElement.getBoundingClientRect();
            const rewardPosition = reward.getBoundingClientRect();

            if (
                playerPosition.left < rewardPosition.left + rewardPosition.width &&
                playerPosition.left + playerPosition.width > rewardPosition.left &&
                playerPosition.top < rewardPosition.top + rewardPosition.height &&
                playerPosition.top + playerPosition.height > rewardPosition.top) {
                reward.remove();
                newGame.score += 100;
            }
        });
    }

    // Functions to create, move and check if player is hit by obstacles that take away all lives with one collision 

    function createObstacleZeroLives() {
        const obstacleZeroLives = document.createElement("div");
        gameScreen.appendChild(obstacleZeroLives);
        obstacleZeroLives.className = "obstacleZeroLives";
        obstacleZeroLives.style.top = 0;
        obstacleZeroLives.style.left = (Math.random() * (newGame.gameScreen.offsetWidth - obstacleZeroLives.offsetWidth)) + "px";
        newGame.obstaclesZeroLivesArray.push(obstacleZeroLives);
    }

    function moveObstacleZeroLives() {
        for (let i = 0; i < newGame.obstaclesZeroLivesArray.length; i++) {
            let currentPositionObstacleZeroLives = parseInt(newGame.obstaclesZeroLivesArray[i].style.top);
            newGame.obstaclesZeroLivesArray[i].style.top = (currentPositionObstacleZeroLives + 1) + "px";

            if (newGame.timeCounter >= 26 && newGame.timeCounter <= 40) {
                newGame.obstaclesZeroLivesArray[i].style.top = (currentPositionObstacleZeroLives + 2) + "px";
            }

            else if (newGame.timeCounter >= 41) {
                newGame.obstaclesZeroLivesArray[i].style.top = (currentPositionObstacleZeroLives + 3) + "px";
            }
           
            if (newGame.obstaclesZeroLivesArray[i].offsetTop >= 470) {
                newGame.obstaclesZeroLivesArray[i].remove();
                newGame.obstaclesZeroLivesArray.splice(i, 1);
            }
        }
    }

    function hitByObstacleZeroLives() {
        newGame.obstaclesZeroLivesArray.forEach((obstacleZeroLives) => {
            const playerPosition = newPlayer.playerElement.getBoundingClientRect();
            const obstacleZeroLivesPosition = obstacleZeroLives.getBoundingClientRect();

            if (
                playerPosition.left < obstacleZeroLivesPosition.left + obstacleZeroLivesPosition.width &&
                playerPosition.left + playerPosition.width > obstacleZeroLivesPosition.left &&
                playerPosition.top < obstacleZeroLivesPosition.top + obstacleZeroLivesPosition.height &&
                playerPosition.top + playerPosition.height > obstacleZeroLivesPosition.top
            ) {
                obstacleZeroLives.remove();
                newGame.lives = 0;
                newGame.gameIsOver = true;
            }
        });
    }

    // Functions to create, move and check if player is hit by rewards that add 1 to lives

    function createRewardLife() {
        const rewardLife = document.createElement("div");
        gameScreen.appendChild(rewardLife);
        rewardLife.className = "rewardLife";
        rewardLife.style.top = 0;
        rewardLife.style.left = (Math.random() * (newGame.gameScreen.offsetWidth - rewardLife.offsetWidth)) + "px";
        newGame.rewardsLifeArray.push(rewardLife);
    }

    function moveRewardLife() {
        for (let i = 0; i < newGame.rewardsLifeArray.length; i++) {
            let currentPositionRewardLife = parseInt(newGame.rewardsLifeArray[i].style.top);
            newGame.rewardsLifeArray[i].style.top = (currentPositionRewardLife + 1) + "px";

            if (newGame.timeCounter >= 26 && newGame.timeCounter <= 40) {
                newGame.rewardsLifeArray[i].style.top = (currentPositionRewardLife + 2) + "px";
            }

            else if (newGame.timeCounter >= 41) {
                newGame.rewardsLifeArray[i].style.top = (currentPositionRewardLife + 3) + "px";
            }

            if (newGame.rewardsLifeArray[i].offsetTop >= 470) {
                newGame.rewardsLifeArray[i].remove();
                newGame.rewardsLifeArray.splice(i, 1);
            }
        }
    }

    function hitByRewardLife() {
        newGame.rewardsLifeArray.forEach((rewardLife) => {
            const playerPosition = newPlayer.playerElement.getBoundingClientRect();
            const rewardLifePosition = rewardLife.getBoundingClientRect();

            if (
                playerPosition.left < rewardLifePosition.left + rewardLifePosition.width &&
                playerPosition.left + playerPosition.width > rewardLifePosition.left &&
                playerPosition.top < rewardLifePosition.top + rewardLifePosition.height &&
                playerPosition.top + playerPosition.height > rewardLifePosition.top
            ) {
                rewardLife.remove();
                newGame.lives += 1;
            }
        });
    }
}