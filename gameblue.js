<!DOCTYPE html>
<html>
<head>
    <title>Jogo do Avatar</title>
    <style>
        canvas {
            border: 1px solid black;
            display: block;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="800" height="400"></canvas>
    <script>
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        const avatar = {
            x: 50,
            y: canvas.height - 50,
            speed: 5,
            width: 50,
            height: 50
        };

        const point = {
            x: canvas.width - 100,
            y: canvas.height - 50,
            width: 30,
            height: 30
        };

        function drawAvatar() {
            ctx.fillStyle = "blue";
            ctx.fillRect(avatar.x, avatar.y, avatar.width, avatar.height);
        }

        function drawPoint() {
            ctx.fillStyle = "red";
            ctx.fillRect(point.x, point.y, point.width, point.height);
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function update() {
            clearCanvas();
            drawAvatar();
            drawPoint();

            // Verifica se o avatar colidiu com o ponto
            if (
                avatar.x < point.x + point.width &&
                avatar.x + avatar.width > point.x &&
                avatar.y < point.y + point.height &&
                avatar.y + avatar.height > point.y
            ) {
                alert("Ponto pego! Parabéns!");
            }
        }

        function gameLoop() {
            update();
            requestAnimationFrame(gameLoop);
        }

        // Controles de movimento
        document.addEventListener("keydown", function(event) {
            if (event.key === "ArrowRight" && avatar.x + avatar.width + avatar.speed <= canvas.width) {
                avatar.x += avatar.speed;
            }
            if (event.key === "ArrowLeft" && avatar.x - avatar.speed >= 0) {
                avatar.x -= avatar.speed;
            }
        });

        gameLoop();
    </script>
</body>
</html>
