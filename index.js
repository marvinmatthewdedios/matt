function addNumber() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    const sum = num1 + num2;
    document.getElementById("sum").textContent = sum;
};

console.log("Connected");