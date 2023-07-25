// The code below will be rendered as soon as the window is loaded.
window.onload = function () {

    const gameScreen = document.getElementById("gameScreen");
    // const startButton = document.getElementById("startButton");
    const newGame = new Game();
    const newPlayer = newGame.player;

    

    // Use setTimeout and setInterval to create and move obstacles and rewards at regular intervals
    setTimeout(() => setInterval(createObstacle, 3000), 350);
    setTimeout(() => setInterval(createReward, 5000), 10000);
    setInterval(moveObstacle, 20);
    setInterval(moveReward, 20);

    
    scoreCounterFunction(newGame); // Call the scoreCounterFunction to update the game score

    
    function gameLoop() { // Function used to run the game loop
        frames++;

        hitByObstacle(); // Check for collisions player-obstacle
        
        hitByReward(); // Check for collisions player-reward

        
        requestAnimationFrame(gameLoop); // Request the next animation frame to continue the game loop

        // if (gameIsOver) {
        //     // add some sort of GAME OVER thing.
        // }

        // else {
        //          requestAnimationFrame(gameLoop); //NOT SURE IF I HAVE TO DO ANYTHING ELSE HERE
        // }
    }

    // Start the game loop
    gameLoop();

    // Update the score counter at regular intervals
    function scoreCounterFunction(newGame) {
        const scoreCounter = document.getElementById("scoreCounter");
        setInterval(() => {
            scoreCounter.innerHTML = newGame.score++;
            console.log(newGame.score);
        }, 700);
    }




    // This eventListener links the keyboard to the code
    document.addEventListener("keydown", function (event) {
        newPlayer.playerMoves(event.key);
    });


    // Create a new obstacle element and add it to the game screen
    function createObstacle() {
        const obstacle = document.createElement("div");
        gameScreen.appendChild(obstacle);
        obstacle.className = "obstacle";
        obstacle.style.top = 0;
        obstacle.style.left = (Math.random() * newGame.gameScreen.offsetWidth) + "px";
        newGame.obstaclesArray.push(obstacle);
    }

    // Move obstacles top->bottom and remove them when they reach the end of the screen vertically
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

    // Create a new reward element and add it to the game screen
    function createReward() {
        const reward = document.createElement("div");
        gameScreen.appendChild(reward);
        reward.className = "reward";
        reward.style.top = 0;
        reward.style.left = (Math.random() * newGame.gameScreen.offsetWidth) + "px";
        newGame.rewardsArray.push(reward);
    }

    // Move rewards top->bottom and remove them when they reach the end of the screen vertically
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

    // Check for collisions between the player and obstacles
    function hitByObstacle() {
        newGame.obstaclesArray.forEach((obstacle) => {
            const playerPosition = newPlayer.playerElement.getBoundingClientRect();
            const obstaclePosition = obstacle.getBoundingClientRect();
            const liveHearts = document.getElementById("lives"); // NOT IN USE

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
        });

        // IF PLAYER GETS HIT 
        // lives -= 1;
        // const liveHearts = document.getElementsByClassName("lives");
        // liveHearts.remove()
    }


    // Check player has collided with reward
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
}