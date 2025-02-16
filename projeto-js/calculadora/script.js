function num(n) {
    let numero = document.getElementById('vizor').innerHTML;
    document.getElementById('vizor').innerHTML = numero + n;
}
function delet() {
    let numero = document.getElementById('vizor').innerHTML;
    document.getElementById('vizor').innerHTML = numero.substring(0, numero.length - 1);
}
function limp() {
    let numero = document.getElementById('vizor').innerHTML = '';
}
function calcular() {
    let numero = document.getElementById('vizor').innerHTML;
    if (numero) {
        document.getElementById('vizor').innerHTML = eval(numero);
    }
}