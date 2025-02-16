let agr = new Date();
let hora = agr.getHours();
let p = document.getElementById("qhs");
let h4 = document.getElementById("saudaçao");
let backgroundImage = '';
p.innerHTML = hora + "h";

if (hora > 0 && hora < 12) {

    h4.innerHTML = `Tenha um bom dia!!🌤`;
    backgroundImage = 'url("dia.jpg")';

} else if (hora >= 12 && hora < 18) {

    h4.innerHTML = `Tenha uma boa tarde!!☀`;
    backgroundImage = 'url("tarde.jpg")';

} else {

    h4.innerHTML = `Tenha uma boa noite!!🌙`;
    backgroundImage = 'url("noite.jpg")';

}

document.body.style.backgroundImage = backgroundImage;