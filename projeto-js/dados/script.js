function executar() {
    let hj = new Date();
    let ano = hj.getFullYear();
    let data = document.getElementById("data").value;
    let texto = document.getElementById("tex");

    if (data == 0 || data > ano) {
        alert("[ERRO] Verifique os dados e tente novamente.")
    } else {
        let idade = ano - data;
        let sexo = document.getElementsByName("sex");
        let gen = "";

        if (sexo[0].checked) {
            gen = "mulher";

            if (idade > 0 && idade <= 2) {

                texto.innerHTML = `É uma bebê de <strong>${idade} anos</strong>.`
                document.getElementById("ft").src = "bebe-menina.jpg"

            } else if (idade > 2 && idade <= 12) {

                texto.innerHTML = `É uma menina de <strong>${idade} anos</strong>.`
                document.getElementById("ft").src = "criança-menina.jpg"
            } else if (idade > 12 && idade <= 18) {

                texto.innerHTML = `É uma adolescente de <strong>${idade} anos</strong>.`
                document.getElementById("ft").src = "adole-mulher.jpg"

            } else if (idade > 18 && idade <= 64) {

                texto.innerHTML = `É uma adulta de <strong>${idade} anos</strong>.`
                document.getElementById("ft").src = "mulher.jpg"

            } else {

                texto.innerHTML = `É uma idosa de <strong>${idade} anos</strong>.`
                document.getElementById("ft").src = "vó.jpg"

            }

        } else {
            gen = "homem";

            if (idade > 0 && idade <= 2) {

                texto.innerHTML = `É um bebe de <strong>${idade} anos </strong>.`
                document.getElementById("ft").src = "bebe-menino.jpg"

            } else if (idade > 2 && idade <= 12) {

                texto.innerHTML = `É um menino de <strong>${idade} anos</strong>.`
                document.getElementById("ft").src = "criança-menino.jpg"
            } else if (idade > 12 && idade <= 18) {

                texto.innerHTML = `É um adolescente de <strong>${idade} anos</strong>.`
                document.getElementById("ft").src = "adole-homem.jpg"

            } else if (idade > 18 && idade <= 64) {

                texto.innerHTML = `É um adulto de <strong>${idade} anos</strong>.`
                document.getElementById("ft").src = "homem.jpg"

            } else {

                texto.innerHTML = `É um idoso de <strong>${idade} anos</strong>.`
                document.getElementById("ft").src = "vô.jpg"

            }

        }
    }

}