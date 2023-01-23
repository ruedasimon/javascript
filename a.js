const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const pid = document.getElementById("result");
const btn = document.getElementById("btn");

btn.addEventListener("click", btnonclick);

function btnonclick() {
    const sumainputs = Number(number1.value) + Number(number2.value);
    pid.innerText = "" + sumainputs;
}