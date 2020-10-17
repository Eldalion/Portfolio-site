

// canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


// player
const snakeSize = 50;
let snakePosX = 0;
let snakePosY = canvas.height / 2 - snakeSize / 2;

let prepinac = true;

// loop

function gameLoop() {

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (prepinac == true ) {
        if (snakePosX < canvas.width - snakeSize) {
            snakePosX = snakePosX +5;
        }
        if (snakePosX == canvas.width - snakeSize) {
            prepinac = false;
        }
    } 

    if (prepinac == false ) {
        if (snakePosX > 0) {
            snakePosX = snakePosX -5;
        }
        if (snakePosX == 0) {
            prepinac = true;
        }
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(snakePosX, snakePosY, snakeSize, snakeSize);

    requestAnimationFrame(gameLoop);
}

gameLoop();



















