// Execute the following code when the window finishes loading
window.onload = function () {
    // Get references to necessary DOM elements
    const gameScreen = document.getElementById("gameScreen");
    const startButton = document.getElementById("startButton");
    document.getElementById("gameScreen").style.display = "none";

    // Create instances of the Game and Player classes
    const newGame = new Game();
    const newPlayer = newGame.player;

    // Add a keydown event listener to the document to handle player movement
    document.addEventListener("keydown", function (event) {
        newPlayer.playerMoves(event.key);
    });

    // Add a click event listener to the "Start" button to start the game
    startButton.addEventListener("click", function () {
        startGame(); // Start the game when the button is clicked
    });

    // Function to start the game
    function startGame() {
        // Hide the start screen and display the game screen
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("gameScreen").style.display = "block";

        // Use setTimeout and setInterval to create and move obstacles and rewards at regular intervals
        setTimeout(() => setInterval(createObstacle, 3000), 350);
        setTimeout(() => setInterval(createReward, 5000), 10000);
        setInterval(moveObstacle, 20);
        setInterval(moveReward, 20);

        // Call the scoreCounterFunction to update the game score
        scoreCounterFunction(newGame);

        // Function to run the game loop
        function gameLoop() {
            frames++;

            // Call hitByObstacle() function to check for collisions with obstacles
            hitByObstacle();

            // Request the next animation frame to continue the game loop
            requestAnimationFrame(gameLoop);

            // if (gameIsOver) {
            //     // add some sort of GAME OVER thing.
            // }

            // else {
            //     requestAnimationFrame(gameLoop); //NOT SURE IF I HAVE TO DO ANYTHING ELSE HERE
            // }
        }

        // Start the game loop
        gameLoop();
    }

    // Function to update the score counter at regular intervals
    function scoreCounterFunction(newGame) {
        const scoreCounter = document.getElementById("scoreCounter");
        setInterval(() => {
            scoreCounter.innerHTML = newGame.score++;
            console.log(newGame.score);
        }, 700);
    }

}