const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');
const scoreboard = {
    player: document.getElementById('player-score'),
    computer: document.getElementById('computer-score')
};

const paddleWidth = 15, paddleHeight = 100;
const ballSize = 12;
const playerPaddle = { x: 10, y: canvas.height/2 - paddleHeight/2, width: paddleWidth, height: paddleHeight, speed: 6, dy: 0 };
const computerPaddle = { x: canvas.width - 10 - paddleWidth, y: canvas.height/2 - paddleHeight/2, width: paddleWidth, height: paddleHeight, speed: 5 };
const ball = { x: canvas.width/2, y: canvas.height/2, size: ballSize, speed: 5, dx: 5, dy: 3 };

let playerScore = 0, computerScore = 0;

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
}

function drawNet() {
    ctx.fillStyle = "#fff";
    for(let i = 0; i < canvas.height; i += 35) {
        ctx.fillRect(canvas.width/2 - 1, i, 2, 20);
    }
}

function draw() {
    // Clear
    drawRect(0, 0, canvas.width, canvas.height, "#000");
    drawNet();

    // Draw paddles and ball
    drawRect(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height, "#fff");
    drawRect(computerPaddle.x, computerPaddle.y, computerPaddle.width, computerPaddle.height, "#fff");
    drawCircle(ball.x, ball.y, ball.size, "#fff");
}

function resetBall() {
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.dx = (Math.random() > 0.5 ? 1 : -1) * ball.speed;
    ball.dy = (Math.random() > 0.5 ? 1 : -1) * (Math.random()*3 + 2);
}

function updateScore() {
    scoreboard.player.textContent = playerScore;
    scoreboard.computer.textContent = computerScore;
}

function collision(paddle) {
    return ball.x - ball.size < paddle.x + paddle.width &&
           ball.x + ball.size > paddle.x &&
           ball.y - ball.size < paddle.y + paddle.height &&
           ball.y + ball.size > paddle.y;
}

function update() {
    // Move player paddle
    playerPaddle.y += playerPaddle.dy;
    // Clamp
    if (playerPaddle.y < 0) playerPaddle.y = 0;
    if (playerPaddle.y + playerPaddle.height > canvas.height) playerPaddle.y = canvas.height - playerPaddle.height;

    // Computer AI
    let center = computerPaddle.y + computerPaddle.height/2;
    if(center < ball.y - 15) {
        computerPaddle.y += computerPaddle.speed;
    } else if(center > ball.y + 15) {
        computerPaddle.y -= computerPaddle.speed;
    }
    // Clamp
    if (computerPaddle.y < 0) computerPaddle.y = 0;
    if (computerPaddle.y + computerPaddle.height > canvas.height) computerPaddle.y = canvas.height - computerPaddle.height;

    // Move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall collision
    if(ball.y < ball.size || ball.y > canvas.height - ball.size) {
        ball.dy = -ball.dy;
    }

    // Paddle collision
    if(collision(playerPaddle)) {
        ball.dx = Math.abs(ball.dx); // always go right
        // Add a little effect
        let collidePoint = (ball.y - (playerPaddle.y + playerPaddle.height/2));
        collidePoint = collidePoint / (playerPaddle.height/2);
        let angle = collidePoint * Math.PI/4;
        let speed = Math.max(Math.abs(ball.dx), 5);
        ball.dx = speed * Math.cos(angle);
        ball.dy = speed * Math.sin(angle);
    } else if(collision(computerPaddle)) {
        ball.dx = -Math.abs(ball.dx); // always go left
        let collidePoint = (ball.y - (computerPaddle.y + computerPaddle.height/2));
        collidePoint = collidePoint / (computerPaddle.height/2);
        let angle = collidePoint * Math.PI/4;
        let speed = Math.max(Math.abs(ball.dx), 5);
        ball.dx = -speed * Math.cos(angle);
        ball.dy = speed * Math.sin(angle);
    }

    // Score
    if(ball.x < 0) {
        computerScore++;
        updateScore();
        resetBall();
    } else if(ball.x > canvas.width) {
        playerScore++;
        updateScore();
        resetBall();
    }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Mouse controls
canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    let mouseY = e.clientY - rect.top;
    playerPaddle.y = mouseY - playerPaddle.height/2;
    // Clamp
    if (playerPaddle.y < 0) playerPaddle.y = 0;
    if (playerPaddle.y + playerPaddle.height > canvas.height) playerPaddle.y = canvas.height - playerPaddle.height;
});

// Keyboard controls
document.addEventListener('keydown', function(e) {
    if(e.key === "ArrowUp") {
        playerPaddle.dy = -playerPaddle.speed;
    } else if(e.key === "ArrowDown") {
        playerPaddle.dy = playerPaddle.speed;
    }
});
document.addEventListener('keyup', function(e) {
    if(e.key === "ArrowUp" || e.key === "ArrowDown") {
        playerPaddle.dy = 0;
    }
});

// Start game
updateScore();
resetBall();
gameLoop();