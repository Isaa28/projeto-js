function tabuada() {
    let r = document.getElementById("r").innerHTML = "";
    let n = Number(document.getElementById('num').value);
    for (let i = 0; i <= 10; i++) {
        document.getElementById("r").innerHTML += (`${n} * ${i} = ${n * i} <br>`);
    }
}