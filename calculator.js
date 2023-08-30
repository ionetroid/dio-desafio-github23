<!DOCTYPE html>
<html>
<head>
    <title>Calculadora em JavaScript</title>
    <script>
        function add(x, y) {
            return x + y;
        }

        function subtract(x, y) {
            return x - y;
        }

        function multiply(x, y) {
            return x * y;
        }

        function divide(x, y) {
            if (y !== 0) {
                return x / y;
            } else {
                return "Erro: Divisão por zero";
            }
        }

        function calculate() {
            var choice = document.getElementById("operation").value;
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var result;

            if (choice === '1') {
                result = add(num1, num2);
            } else if (choice === '2') {
                result = subtract(num1, num2);
            } else if (choice === '3') {
                result = multiply(num1, num2);
            } else if (choice === '4') {
                result = divide(num1, num2);
            } else {
                result = "Opção inválida";
            }

            document.getElementById("result").innerHTML = "Resultado: " + result;
        }
    </script>
</head>
<body>
    <h2>Calculadora em JavaScript</h2>
    <label for="operation">Escolha a operação:</label>
    <select id="operation">
        <option value="1">Adição</option>
        <option value="2">Subtração</option>
        <option value="3">Multiplicação</option>
        <option value="4">Divisão</option>
    </select>
    <br>
    <label for="num1">Digite o primeiro número:</label>
    <input type="number" id="num1">
    <br>
    <label for="num2">Digite o segundo número:</label>
    <input type="number" id="num2">
    <br>
    <button onclick="calculate()">Calcular</button>
    <p id="result"></p>
</body>
</html>
