function nacionalidade() {
    let na = document.getElementById('nacio').value;
    let p = na.toUpperCase();
    if (p == '') {
        alert("[ERRO]Verifique os dados e tente novamente")
    } else if (p == 'BRASIL' || p == 'BRAZIL') {
        let res = document.getElementById('res').innerHTML = 'Você é brasileiro.';
    } else {
        let res = document.getElementById('res').innerHTML = 'Você é estrangeiro.';
    }

}