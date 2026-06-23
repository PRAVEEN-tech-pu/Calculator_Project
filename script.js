function getValues() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    if (a === "" || b === "") {
        document.getElementById("result").innerHTML = "Result: Please enter both numbers";
        return null;
    }

    return {
        a: Number(a),
        b: Number(b)
    };
}

function add() {
    let values = getValues();
    if (!values) return;

    document.getElementById("result").innerHTML =
        "Result: " + (values.a + values.b);
}

function subtract() {
    let values = getValues();
    if (!values) return;

    document.getElementById("result").innerHTML =
        "Result: " + (values.a - values.b);
}

function multiply() {
    let values = getValues();
    if (!values) return;

    document.getElementById("result").innerHTML =
        "Result: " + (values.a * values.b);
}

function divide() {
    let values = getValues();
    if (!values) return;

    if (values.b === 0) {
        document.getElementById("result").innerHTML = "Result: Cannot divide by zero";
        return;
    }

    document.getElementById("result").innerHTML =
        "Result: " + (values.a / values.b);
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "Result:";
}