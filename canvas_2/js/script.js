

// listeners
document.addEventListener('keydown',keyPush);


// canvas
const canvas = document.querySelector('canvas');
const title = document.querySelector('h1');
const ctx = canvas.getContext('2d');

//game

let gameIsRunning = true;

const fps = 15;
const tileSize = 25;
const tileCountX = canvas.width / tileSize;
const tileCountY = canvas.height / tileSize;

let score = 0;

// player

let snakeSpeed = tileSize;
let snakePosX = 0;
let snakePosY = canvas.height / 2 ;

let velocityX = 1;
let velocityY = 0;

let tail = [];
let snakeLength = 4;

//food

let foodPosX = 300;
let foodPosY = 300;



// loop

function gameLoop() {
    if (gameIsRunning) {
        drawStuff();
        moveStuff();
        setTimeout(gameLoop, 1000 / fps);
    }
}

resetFood()
gameLoop();

function moveStuff() {
    //snakePosX += snakeSpeed;
    snakePosX += snakeSpeed * velocityX;
    snakePosY += snakeSpeed * velocityY;


    // wall colision
    if (snakePosX > canvas.width - tileSize) {
        snakePosX = 0;
    }

    if (snakePosX < 0) {
        snakePosX = canvas.width;
    }

    if (snakePosY > canvas.height - tileSize) {
        snakePosY = 0;
    }

    if (snakePosY < 0) {
        snakePosY = canvas.height;
    }

    // game over
    tail.forEach((snakePart) => {
        if (snakePosX === snakePart.x && snakePosY === snakePart.y) {
            gameOver();
        }
    });

    // tail
    tail.push({ x: snakePosX, y: snakePosY});

    // forget parts of snake
    tail = tail.slice(-1 * snakeLength)
    // food colision
    

    if (snakePosX === foodPosX && snakePosY === foodPosY) {
        score++;
        title.textContent = score;
        resetFood();
        snakeLength = snakeLength + 1;
    }


}

function drawStuff() {
    // background
    rectangle('#ffbf00', 0, 0, canvas.width, canvas.height);
    // grid
    drawGrid();
    //food
    rectangle('#00bfff', foodPosX, foodPosY, tileSize, tileSize);
    //tail
    tail.forEach( (snakePart) => rectangle('#555',snakePart.x,snakePart.y,tileSize,tileSize));
    // snake
    rectangle('black', snakePosX, snakePosY, tileSize, tileSize);

}

function rectangle(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function resetFood() {
    foodPosX = Math.floor( Math.random() * tileCountX ) * tileSize;
    foodPosY = Math.floor( Math.random() * tileCountY ) * tileSize;
}

function gameOver() {
    title.innerHTML = `&#9760;<strong>${score}</strong>&#9760;`
    gameIsRunning = false;
}

function keyPush(event) {
    switch(event.key) {
        case 'ArrowLeft':
            if (velocityX !== 1) {
                velocityX = -1;
                velocityY = 0;
            }
            break;
        case 'ArrowUp':
            if (velocityY !== 1) {
                velocityX = 0;
                velocityY = -1
            }
            break;
        case 'ArrowRight':
            if (velocityX !== -1) {
                velocityX = 1;
                velocityY = 0;
            }
            break;
        case 'ArrowDown':
            if (velocityY !== -1) {
                velocityX = 0;
                velocityY = 1;
            }
            break;
        case 'Enter':
            location.reload();
            break;    
    }
}

function drawGrid() {
    for (let i = 0; i < tileCountX; i++) {
        for (let j = 0; j < tileCountY; j++) {
            rectangle(
                '#fff', 
                tileSize * i, 
                tileSize * j, 
                tileSize - 1, 
                tileSize - 1
            );
        }
    }
}



















