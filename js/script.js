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
        setInterval(moveObstacle, 20);
        setInterval(moveReward, 20);
        setInterval(moveObstacleZeroLives, 20);
        scoreCounterFunction(newGame); // Call the scoreCounterFunction to update the game score
    }



    const startButton = document.getElementById("startButton")
    startButton.addEventListener("click", function () { // Game will start only after pressing the startButton
        startGame()
        startButton.style.display = "none";
        console.log("Starting Game...")
        
    })
    
    const restartButton = document.getElementById("restartButton")
    restartButton.addEventListener("click", function () { // Game will restart
        window.location.reload();
        console.log("Restarting game...")
        
    })
    
    
    document.addEventListener("keydown", function (event) { // This eventListener links the keyboard to the code
        newPlayer.playerMoves(event.key);
    });
    
    
    function gameLoop() { // Function used to run the game loop
        frames++;
        
        newGame.updateLifeCounter();
        
        hitByObstacle(); // Check for collisions player-obstacle

        hitByObstacleZeroLives();

        hitByReward(); // Check for collisions player-reward

        requestAnimationFrame(gameLoop); // Request the next animation frame to continue the game loop

        newGame.checkGameIsOver();

    }



    // Update the score counter at regular intervals
    function scoreCounterFunction(newGame) {
        const scoreCounter = document.getElementById("scoreCounter");
        setInterval(() => {
            scoreCounter.innerHTML = newGame.score++;
            console.log(newGame.score);
        }, 700);
    }


    // Functions to create and move obstacles

    function createObstacle() {
        const obstacle = document.createElement("div");
        gameScreen.appendChild(obstacle);
        obstacle.className = "obstacle";
        obstacle.style.top = 0;
        obstacle.style.left = (Math.random() * newGame.gameScreen.offsetWidth) + "px";
        newGame.obstaclesArray.push(obstacle);
    }


    function moveObstacle() {
        for (let i = 0; i < newGame.obstaclesArray.length; i++) {
            let currentPositionObstacle = parseInt(newGame.obstaclesArray[i].style.top);
            newGame.obstaclesArray[i].style.top = (currentPositionObstacle + 1) + "px";

            if (newGame.obstaclesArray[i].offsetTop >= 495) {
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
                console.log("HIT BY OBSTACLE")

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
        reward.style.left = (Math.random() * newGame.gameScreen.offsetWidth) + "px";
        newGame.rewardsArray.push(reward);
    }

    function moveReward() {
        for (let i = 0; i < newGame.rewardsArray.length; i++) {
            let currentPositionReward = parseInt(newGame.rewardsArray[i].style.top);
            newGame.rewardsArray[i].style.top = (currentPositionReward + 1) + "px";

            if (newGame.rewardsArray[i].offsetTop >= 495) {
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
                playerPosition.top + playerPosition.height > rewardPosition.top
            ) {
                reward.remove();
                newGame.score += 100;
                console.log("HIT BY REWARD")
            }


        });

    }

// Functions to create, move and check if player is hit by obstacles that take away all lives with one collision 

    function createObstacleZeroLives() {
        const obstacleZeroLives = document.createElement("div");
        gameScreen.appendChild(obstacleZeroLives);
        obstacleZeroLives.className = "obstacleZeroLives";
        obstacleZeroLives.style.top = 0;
        obstacleZeroLives.style.left = (Math.random() * newGame.gameScreen.offsetWidth) + "px";
        newGame.obstaclesZeroLivesArray.push(obstacleZeroLives);
    }


    function moveObstacleZeroLives() {
        for (let i = 0; i < newGame.obstaclesZeroLivesArray.length; i++) {
            let currentPositionObstacleZeroLives = parseInt(newGame.obstaclesZeroLivesArray[i].style.top);
            newGame.obstaclesZeroLivesArray[i].style.top = (currentPositionObstacleZeroLives + 1) + "px";

            if (newGame.obstaclesZeroLivesArray[i].offsetTop >= 495) {
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
                console.log("HIT BY OBSTACLE ZERO LIVES")

            }


        });
}
}